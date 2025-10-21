import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // For now, we'll just log the email and return success
    // You can integrate with Buttondown API here:
    // const response = await fetch('https://api.buttondown.email/v1/subscribers', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Token ${process.env.BUTTONDOWN_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email }),
    // })

    console.log('New subscription:', email)

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
