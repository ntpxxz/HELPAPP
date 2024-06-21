import getModel from '@/model/case/getModel'; // Assuming your case model file is named caseModel.js

const CaseModel = getModel();

// Create a new case document
const newCase = new CaseModel({
  case_id: "1234",
  date: new Date(),
  name: "Sample Case",
  // ... other properties
});

newCase.save()
  .then(() => console.log("Case created successfully!"))
  .catch(err => console.error(err));

// Find cases
CaseModel.find({ section: "Electronics" })
  .then(cases => console.log(cases))
  .catch(err => console.error(err));
