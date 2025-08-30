import { NextResponse } from 'next/server';
import { prisma } from '@/lib/database-production';

export async function GET() {
  try {
    console.log('🔍 Testing database connection...');
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Database URL exists:', !!process.env.DATABASE_URL);
    console.log('Database URL prefix:', process.env.DATABASE_URL?.substring(0, 30) + '...');
    
    // Test basic connection
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('✅ Database query successful:', result);
    
    // Test a simple table query
    try {
      const userCount = await prisma.user.count();
      console.log('✅ User table accessible, count:', userCount);
    } catch (tableError) {
      console.log('⚠️ User table error:', tableError);
    }
    
    return NextResponse.json({
      status: 'connected',
      message: 'Database connection successful',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      hasDatabaseUrl: !!process.env.DATABASE_URL,
      testQuery: result,
      userCount: await prisma.user.count().catch(() => 'error')
    });
    
  } catch (error) {
    console.error('💥 Database connection failed:', error);
    
    return NextResponse.json({
      status: 'disconnected',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      hasDatabaseUrl: !!process.env.DATABASE_URL,
      databaseUrlPrefix: process.env.DATABASE_URL?.substring(0, 30) + '...'
    }, { status: 500 });
  }
}
