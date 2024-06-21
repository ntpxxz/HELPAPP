// route.ts
import { connectMongoDB } from 'lib/database' // Assuming db.js is in lib directory
import CaseModel  from '@/models/caseModel';
import { NextRequest, NextResponse } from "next/server";
import { HttpStatusCode } from 'axios';
//import { UpdateProductDto } from '@/keepCount/dto/update-product.dto';


export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectMongoDB();
        const cases = await CaseModel.findById(params.id);
        if (cases) {
            return NextResponse.json({ cases });
        }
        return NextResponse.json({ message: `Product ${params.id} not found` }, { status: HttpStatusCode.NotFound });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}

/*export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectMongoDB();
        const cases = await CaseModel.findById(params.id);
        if (cases) {
            const body: UpdateProductDto = await req.json();
            if (body.name) {
                cases.name = body.name;
            }
            if (body.price) {
              cases.name = body.price;
            }
            if (body.description) {
              cases.name = body.description;
            }
            cases.save();
            return NextResponse.json({ cases });
        }
        return NextResponse.json({ message: `Product ${params.id} not found` }, { status: HttpStatusCode.NotFound });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}*/

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectMongoDB();
        const cases = await CaseModel.findById(params.id);
        if (cases) {
            await CaseModel.findByIdAndDelete(cases._id);
            return NextResponse.json({ message: `Product ${params.id} has been deleted` });
        }
        return NextResponse.json({ message: `Product ${params.id} not found` }, { status: HttpStatusCode.NotFound });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}