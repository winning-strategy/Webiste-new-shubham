# Spreadsheet Agent Video Files

Place your demo video files in this directory. The component expects the following video files:

## Required Video Files

1. `pdf-modeling.mp4` - Financial statement analysis from earnings reports demo
2. `web-search.mp4` - Competitive intelligence and comparison matrix demo
3. `data-analysis.mp4` - Sales analytics and dashboard creation with performance metrics demo
4. `data-cleaning.mp4` - Data standardization and customer record cleaning demo
5. `cap-table.mp4` - Scenario planning model with fundraising projections demo
6. `model-validation.mp4` - Model auditing and QA with error detection demo

## Video Specifications

- **Format**: MP4 (H.264 codec recommended)
- **Resolution**: 1080p (1920x1080) or higher
- **Aspect Ratio**: 16:9
- **File Size**: Optimize for web (aim for 5-15MB per video)
- **Duration**: 30-90 seconds per video

## Creating Videos

Tools recommended for creating these demo videos:
- **Focusee** - Automatic cursor zoom and smooth animations
- **Screen Studio** - Mac only, beautiful automatic animations
- **DaVinci Resolve** - Free professional video editor
- **OBS Studio** - Free screen recording

## Compression

To optimize file size for web, use:
```bash
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -strict -2 -crf 23 output.mp4
```

Or use online tools like:
- HandBrake (free desktop app)
- CloudConvert.com
- Compressor.io

## Placeholder

Until videos are ready, the page will show the HTML5 video player with a "Your browser does not support the video tag" message.

