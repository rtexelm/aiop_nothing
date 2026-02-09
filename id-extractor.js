// ========================================
// Google Drive ID Extractor
// ========================================

// Paste your Google Drive share URLs here
const driveUrls = [
  "https://drive.google.com/file/d/1fL_NgTOc4qOiK7Qrz7eLlfmXx7UZKVZA/view?usp=drive_link",
  "https://drive.google.com/file/d/1YxWZvQ06njlHUVx8I6OJ4CKNQXhgoWEG/view?usp=drive_link",
  "https://drive.google.com/file/d/1WUxOwieTqMEPIRXg-91_bwgtMLOmFTBG/view?usp=drive_link",
  "https://drive.google.com/file/d/1QrG56_UPxYkATfeb4cpJR-p1QI2gEaWW/view?usp=drive_link",
  "https://drive.google.com/file/d/1C_zT1VVJxMedP3cAld-eAaTVasckhRag/view?usp=drive_link",
  "https://drive.google.com/file/d/11sfSCsQ7_Rzqsey8Wjs9pu7gpFLZ-1dP/view?usp=drive_link",
  "https://drive.google.com/file/d/1nFb-yDxxxmPD_hHWgcGTHKlLqtpQ-HW4/view?usp=drive_link",
  "https://drive.google.com/file/d/1msjwLp6napyPGbVO-c1pByP5MGdoZJr_/view?usp=drive_link",
  "https://drive.google.com/file/d/1edcyR4r1h2cOVn4teie1ZNRgVkmuLvxY/view?usp=drive_link",
  "https://drive.google.com/file/d/1i-TRk0AlYqPSp7Ua0S7qauy96-2bAIPL/view?usp=drive_link",
  "https://drive.google.com/file/d/1xOGjP-3MIDSd4tH4_jELIdQ5zger29K5/view?usp=drive_link",
  "https://drive.google.com/file/d/1EcUvZdNx6USdspTfz9UDcduq3zXo7T1U/view?usp=drive_link",
  "https://drive.google.com/file/d/1SB-wevsbhVZW_fkOqVmtH4koNJrJzmGf/view?usp=drive_link",
  "https://drive.google.com/file/d/1aFs8UYnesC67JpGmLRxno6Pa3ags_33h/view?usp=drive_link",
  "https://drive.google.com/file/d/1AZELe-JX_jFNZzFi0WlgQXtWuGPFhr3e/view?usp=drive_link",
  "https://drive.google.com/file/d/1wTPM5bFlu7a8vLketEgJdDsB-OrEBSif/view?usp=drive_link",
  "https://drive.google.com/file/d/1rh4dPFycpXCZ4nhB88iQ_ntGfP1MafJq/view?usp=drive_link",
  "https://drive.google.com/file/d/1aeSB7rmyKG7zKnG7gqj01lZI1jHl2PKh/view?usp=drive_link",
  "https://drive.google.com/file/d/1UYERGqnWYAGT4GUeSnOKVLiALGIhSndH/view?usp=drive_link",
  "https://drive.google.com/file/d/11j39-NoelFVjZ1wLuTq0iYVJZG0BUahI/view?usp=drive_link",
  "https://drive.google.com/file/d/1YSX4qHgBXXBlIqw4xggV9jDnooHyMNMO/view?usp=drive_link",
  "https://drive.google.com/file/d/1sCo6i6b6jgw55rRbbmFUvtjtPQyuEqXN/view?usp=drive_link",
  "https://drive.google.com/file/d/1xQ6B4hf2TANcQd-NMRyKGWGL17vZ1xzM/view?usp=drive_link",
  "https://drive.google.com/file/d/1Omp-uGjJWCTlDTdnRWH3nHRlJrto2b6Z/view?usp=drive_link",
  "https://drive.google.com/file/d/1R7Y-UQS5KPpS_PF1LSbj9n0SQCvxPgFZ/view?usp=drive_link",
  "https://drive.google.com/file/d/1MYkPpU_-EiuPvV-sMEE1yqN5UGy_St-d/view?usp=drive_link",
  "https://drive.google.com/file/d/1vBFc7lomyLm2uj2taTn-MgfudZtd1P2H/view?usp=drive_link",
  "https://drive.google.com/file/d/1I2qbgpAXuJHLo7jYDre2j7jsgaqAcMjt/view?usp=drive_link",
  "https://drive.google.com/file/d/1NupeO02rZHL2jWxMxDiGY7cxWDrP-k6b/view?usp=drive_link",
  "https://drive.google.com/file/d/1srm1vFpflbACmAknUet46L9cdL1xUo0w/view?usp=drive_link",
  "https://drive.google.com/file/d/1YVt__uodCL9ci0YOiRJhg5U1Y-1mrJ-5/view?usp=drive_link",
  "https://drive.google.com/file/d/1PMcDZQe27DE32vCcpgtMyfLWpLGOHqDT/view?usp=drive_link",
  "https://drive.google.com/file/d/13FxLg1kUNNNKeavSWVm-nGCmb9Q1oeE8/view?usp=drive_link",
  "https://drive.google.com/file/d/1Mk-QAufd0vsaOGzmoCsEoWpNEb_zdDp1/view?usp=drive_link",
  "https://drive.google.com/file/d/1KV2gI8MSflhvb6N8LSZ9IM0hI7oLs49k/view?usp=drive_link",
  "https://drive.google.com/file/d/1hR_K7X9lLJEBE2xfp_L8trYWNgXo-tgA/view?usp=drive_link",
  "https://drive.google.com/file/d/1Bl-3KPO0lnu4BNpngNTsQFShJPqvI1QC/view?usp=drive_link",
  "https://drive.google.com/file/d/1BzEy59nhxygnGJu68P7nK7f30EkaLmVe/view?usp=drive_link",
  "https://drive.google.com/file/d/1Ct1w5cMIKo1UOobxo2HD7SNkr7m8egh7/view?usp=drive_link",
  "https://drive.google.com/file/d/1Ljqz6dBa6bM46q-7a1FxoXy0HdeVqgr5/view?usp=drive_link",
  "https://drive.google.com/file/d/17K3fKOV7RBQQ0ZLdekygDQR0y6-KJ-1s/view?usp=drive_link",
  "https://drive.google.com/file/d/1E3-zh3eFqZP6wF8py_N13R_qlQh9cjFS/view?usp=drive_link",
  "https://drive.google.com/file/d/1mwqqZVpVp3N6qenmlhZS84PlHoSz8P94/view?usp=drive_link",
  "https://drive.google.com/file/d/1AFdbxrhi91ulFntTzmuvAM10y5HuKUTU/view?usp=drive_link",
  "https://drive.google.com/file/d/1GsF1P2fWrgX2f0XfTikv9et3hCcCLOAD/view?usp=drive_link",
  "https://drive.google.com/file/d/1A4D1zSyUD9ytbmfEmoXAHasHrv5Swrtr/view?usp=drive_link",
  "https://drive.google.com/file/d/1wHxobKsnK8TaLBBtgJEgnmPEnOl_txz2/view?usp=drive_link",
  "https://drive.google.com/file/d/1FxMBRPq5qG-Re995YxTNPIQ--7JbkVK8/view?usp=drive_link",
  "https://drive.google.com/file/d/1Z9-3V8ooSk5zNRCnW_Zyg7KRSKeNSU8I/view?usp=drive_link",
  "https://drive.google.com/file/d/1fBHuxd23ITDq-6uCWtMKAoHJSzau6Jwa/view?usp=drive_link",
  "https://drive.google.com/file/d/1_CdOIVEs6FOYSjDCFNKq-59ifpkfYEng/view?usp=drive_link",
  "https://drive.google.com/file/d/1afUKopQlkG_uKnIBhCus03yPqMOztWdt/view?usp=drive_link",
  "https://drive.google.com/file/d/1fbBpI-NNl2B5DFftcHhpRtyPZMbKB1bg/view?usp=drive_link",
  "https://drive.google.com/file/d/1zXXKSTgfbiHiaGKhIUDesI9m8TnEUU7t/view?usp=drive_link",
  "https://drive.google.com/file/d/1zg5CTgw8rC2XoBNfz73anfQrKwwGjF7g/view?usp=drive_link",
  "https://drive.google.com/file/d/1KoMg7Cz4YK1R6PvpitGFSc0nBgijr6u-/view?usp=drive_link",
  "https://drive.google.com/file/d/1YDVuhkLWjtEUxj1La_6D8OMF_ZhK72JQ/view?usp=drive_link",
  "https://drive.google.com/file/d/1FXXgiy9zNjYvqHHVIgXLS5wo8QvUJkXi/view?usp=drive_link",
  "https://drive.google.com/file/d/1-lhF0XjyLS39yZPZWvTmUwJmOUrTEGQ-/view?usp=drive_link",
  "https://drive.google.com/file/d/1tSOsDTiMNRBIQWjBeuiuHLj5IK7ORK1X/view?usp=drive_link",
  "https://drive.google.com/file/d/11jbZlExRgJDRxdVJ1py1HCdQGIVyXCkB/view?usp=drive_link",
  "https://drive.google.com/file/d/1YnKz_U53O0moaMKbcgoDW6IY67GdrGg9/view?usp=drive_link",
  "https://drive.google.com/file/d/1esUQ7COFugF_Rxx5B6CwGLLY1pE2rqmY/view?usp=drive_link",
  "https://drive.google.com/file/d/1eDjOygba5NV2N1fvjtsObs_xgKWfVYS8/view?usp=drive_link",
  "https://drive.google.com/file/d/1-70_RK68s4jss43Y_93S43PWXyswVNZn/view?usp=drive_link",
  "https://drive.google.com/file/d/1kH4uzDhAOd9KRmQWoTz9v8OvtiyS4fw2/view?usp=drive_link",
  "https://drive.google.com/file/d/1D6ejhHHt9n932AvH_CCiUwqzkPNOvclD/view?usp=drive_link",
  "https://drive.google.com/file/d/1ICTryMSJaMvXdsSCkErEQmBW0y2Oqq7e/view?usp=drive_link",
  "https://drive.google.com/file/d/1xzpNWtkaKXx-u3SOH3vB2f1-MERSIdCZ/view?usp=drive_link",
  "https://drive.google.com/file/d/1tKtItAIBBlLefYF5Zw-iyqcxJt65s2E4/view?usp=drive_link",
  "https://drive.google.com/file/d/1-W7ftqfaSOvX7_Gqe0ySqNG85Sf2TIL6/view?usp=drive_link",
  "https://drive.google.com/file/d/1xDXz9JGenKs0by68w9GNYCevc-1ZECPW/view?usp=drive_link",
  "https://drive.google.com/file/d/1jvJu1JU8BO2ORlVN5btDHtOH094Tvuzl/view?usp=drive_link",
  "https://drive.google.com/file/d/17OqQ-6dBZSaNkW4IBgb2GE0f2vXu1Gc7/view?usp=drive_link",
  "https://drive.google.com/file/d/1P_lYtiaNMm26kn3ahCXye6_oJy7oYZUD/view?usp=drive_link",
  "https://drive.google.com/file/d/1gnp5d_eRkLnNF5OWxSoWUgQIsWazbDck/view?usp=drive_link",
  // Add more URLs here...
];

// Function to extract ID from various Google Drive URL formats
function extractDriveId(url) {
  // Pattern 1: /file/d/ID/
  let match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return match[1];

  // Pattern 2: /open?id=ID
  match = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (match) return match[1];

  // Pattern 3: /d/ID/
  match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return match[1];

  return null;
}

// Extract all IDs
const imageIds = driveUrls
  .map((url) => extractDriveId(url))
  .filter((id) => id !== null); // Remove any failed extractions

// Output results
console.log("// Extracted Image IDs:");
console.log("const imageIds = [");
imageIds.forEach((id, index) => {
  const comma = index < imageIds.length - 1 ? "," : "";
  console.log(`    '${id}'${comma}`);
});
console.log("];");

console.log("\n// Generated URLs (drive.usercontent.google.com):");
console.log("const imageUrls = [");
imageIds.forEach((id, index) => {
  const comma = index < imageIds.length - 1 ? "," : "";
  console.log(
    `    'https://drive.usercontent.google.com/download?id=${id}&export=view'${comma}`,
  );
});
console.log("];");

console.log("\n// Generated URLs (lh3.googleusercontent.com):");
console.log("const imageUrls = [");
imageIds.forEach((id, index) => {
  const comma = index < imageIds.length - 1 ? "," : "";
  console.log(`    'https://lh3.googleusercontent.com/d/${id}'${comma}`);
});
console.log("];");
