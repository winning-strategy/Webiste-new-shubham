"use client";

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

interface AgentLinkProps {
  agentUrl: string;
  children: React.ReactNode;
  className?: string;
  requireAuth?: boolean;
}

export default function AgentLink({ agentUrl, children, className, requireAuth = true }: AgentLinkProps) {
  const { user, session } = useAuth();
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // If authentication is required but user is not logged in, redirect to sign in
    if (requireAuth && !user) {
      router.push('/auth/signin');
      return;
    }

    // If user is authenticated, pass the access token to the agent
    if (session?.access_token) {
      // Add the access token as a hash parameter so agents can pick it up
      // Supabase will automatically restore the session from these URL parameters
      const targetUrl = `${agentUrl}#access_token=${encodeURIComponent(session.access_token)}&refresh_token=${encodeURIComponent(session.refresh_token)}&expires_in=${session.expires_in}&token_type=bearer`;
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    } else {
      // If no session, just open the agent normally
      window.open(agentUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <a
      href={agentUrl}
      onClick={handleClick}
      className={className}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

