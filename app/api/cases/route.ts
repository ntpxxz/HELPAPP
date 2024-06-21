import { HttpStatusCode } from 'axios';
import { connectMongoDB } from 'lib/database'; // Assuming this connects to MongoDB
import CaseModel from 'models/caseModel'; // Assuming CaseModel exports a Case interface
import { CreateCaseDto } from '../../dto/create-case-dto';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
    try {
        await connectMongoDB();
        const body: CreateCaseDto = await req.json();
        if (body.caseId) {
            const cases = await CaseModel.create(body);
            return NextResponse.json(
                { cases, message: 'Your product has been created' },
                { status: HttpStatusCode.Created },
            );
        }
        return NextResponse.json({ message: 'Product name is missing' }, { status: HttpStatusCode.BadRequest });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}
export async function GET() {
    try {
        await connectMongoDB();
        const cases = await CaseModel.find();
        return NextResponse.json({ data: cases });
    } catch (error) {
        return NextResponse.json({ error });
    }
}



