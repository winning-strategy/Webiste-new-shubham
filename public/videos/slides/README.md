# Slide Generation Agent Video Files

Place your demo video files in this directory. The component expects the following video files:

## Required Video Files

1. `ic-presentation.mp4` - Investment Committee presentation demo
2. `market-research.mp4` - Market research with competitor analysis demo
3. `pitch-deck.mp4` - Client pitch deck generation demo
4. `campaign-report.mp4` - Marketing campaign performance report demo
5. `portfolio-review.mp4` - Portfolio review deck demo
6. `exec-summary.mp4` - Executive summary slides demo

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


