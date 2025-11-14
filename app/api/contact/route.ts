import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { 
          error: 'Email service is not configured. Please contact the administrator.',
          details: 'Missing RESEND_API_KEY environment variable'
        },
        { status: 500 }
      );
    }

    console.log('API Key detected:', process.env.RESEND_API_KEY.substring(0, 10) + '...');

    // Initialize Resend with your API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create well-formatted HTML email
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #007770 0%, #00B3A6 100%);
      color: white;
      padding: 30px 20px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      background: #f9f9f9;
      padding: 30px;
      border-radius: 0 0 8px 8px;
    }
    .field {
      margin-bottom: 20px;
      background: white;
      padding: 15px;
      border-radius: 6px;
      border-left: 4px solid #007770;
    }
    .field-label {
      font-weight: 600;
      color: #007770;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
    }
    .field-value {
      color: #333;
      font-size: 15px;
    }
    .message-box {
      background: white;
      padding: 20px;
      border-radius: 6px;
      border: 1px solid #e0e0e0;
      margin-top: 10px;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
      color: #666;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎯 New Contact Form Submission</h1>
  </div>
  <div class="content">
    <div class="field">
      <div class="field-label">Full Name</div>
      <div class="field-value">${name}</div>
    </div>
    
    <div class="field">
      <div class="field-label">Email Address</div>
      <div class="field-value"><a href="mailto:${email}" style="color: #007770; text-decoration: none;">${email}</a></div>
    </div>
    
    ${company ? `
    <div class="field">
      <div class="field-label">Company</div>
      <div class="field-value">${company}</div>
    </div>
    ` : ''}
    
    ${phone ? `
    <div class="field">
      <div class="field-label">Phone Number</div>
      <div class="field-value"><a href="tel:${phone}" style="color: #007770; text-decoration: none;">${phone}</a></div>
    </div>
    ` : ''}
    
    <div class="field">
      <div class="field-label">Message</div>
      <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
    </div>
    
    <div class="footer">
      <p>This message was sent from the WinningStrategy.ai contact form</p>
      <p>Received on ${new Date().toLocaleString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      })}</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    // Create plain text version
    const textContent = `
New Contact Form Submission from WinningStrategy.ai
====================================================

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}

Message:
--------
${message}

----
Received on ${new Date().toLocaleString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short'
})}
    `.trim();

    // Send email using Resend
    try {
      console.log('Attempting to send email from:', name, email);
      
      const { data, error } = await resend.emails.send({
        from: 'WinningStrategy Contact Form <contact@winningstrategy.ai>', // Your verified domain
        to: ['winningstrategyai@gmail.com'], // Your actual Gmail that can receive emails
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: htmlContent,
        text: textContent,
      });
      
      console.log('Resend response - Data:', data, 'Error:', error);

      if (error) {
        console.error('Resend API error:', error);
        console.error('Full error details:', JSON.stringify(error, null, 2));
        return NextResponse.json(
          { 
            error: 'Failed to send email. Please try again or contact us directly.',
            details: error.message || 'Unknown Resend error'
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { 
          success: true, 
          message: 'Email sent successfully',
          id: data?.id 
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Error sending email via Resend:', emailError);
      return NextResponse.json(
        { 
          error: 'Failed to send email. Please try again or contact us directly.',
          details: emailError instanceof Error ? emailError.message : 'Unknown error'
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { 
        error: 'An error occurred processing your request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

