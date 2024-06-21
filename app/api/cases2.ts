import { dataConnect } from "@/lib/database";
import { caseModel, CaseInfo } from "@/models/caseModel" // Assuming CaseModel is a type and Case is the model interface


export default async function handle(req: any, res: []) {
  try {
    await dataConnect();
    const cases = await caseModel().find().exec() as CaseInfo[];
    res.json(cases);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' }); // Handle error gracefully
  }
}
