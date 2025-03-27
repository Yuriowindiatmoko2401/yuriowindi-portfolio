import { getPayload } from '../../../../lib/payload'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const payload = await getPayload()
    if (!payload) {
      throw new Error('Failed to initialize payload')
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error initializing payload:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}