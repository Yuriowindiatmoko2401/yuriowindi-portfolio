import payload from 'payload'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await payload.init()
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error initializing payload:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}