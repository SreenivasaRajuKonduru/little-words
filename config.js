/* PUBLISHER CONTROL — change true/false, then commit on GitHub. */
// PUBLISHER SETTINGS: edit these values in GitHub before publishing.
// This is UI control, NOT authentication or secure access control.
const PUBLISHER = {
  allowVisitorEditing: false,
  visibleTabs: {learn:true,names:true,stories:false,practice:true,meaning:true},
  allowVisitorTabChanges: false,
  // Number lessons 1–5 only; raise this limit later as the child learns.
  maxNumber: 5,
  // Sub-tabs (learning categories): true = show, false = hide.
  visibleCategories: {
    'My Family': true,
    'Spiritual Learning': false,
    'Food & Drinks': true,
    'Body Parts': true,
    'ABCs': true,
    'Numbers': true,
    'Colors': true,
    'Animals': true,
    'Vehicles': true,
    'At Home': true,
    'Clothes': true,
    'Toys': true,
    'Outside & Places': true,
    'Everyday Words': true,
  }
};
