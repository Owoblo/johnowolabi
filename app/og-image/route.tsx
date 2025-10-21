import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'John Owolabi'
    const subtitle = searchParams.get('subtitle') || 'Designer & Writer'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FAFAF7',
            backgroundImage: 'linear-gradient(45deg, #FAFAF7 0%, #EAE9E4 100%)',
            fontFamily: 'serif',
          }}
        >
          {/* Top accent line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              backgroundColor: '#4C5A3C',
            }}
          />
          
          {/* Main content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px',
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                fontSize: '64px',
                fontWeight: '500',
                color: '#111215',
                margin: '0 0 16px 0',
                lineHeight: '1.1',
                fontFamily: 'serif',
              }}
            >
              {title}
            </h1>
            
            {subtitle && (
              <p
                style={{
                  fontSize: '24px',
                  color: '#6B7280',
                  margin: '0',
                  fontWeight: '400',
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
          
          {/* Bottom accent line */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              height: '4px',
              backgroundColor: '#4C5A3C',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
