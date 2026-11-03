// NUMBERS PAGE — edit the list below to add or remove numbers.
// Example: [0, 1, 2, 3, 4, 5, 6] adds 6.
// Each number displays counting dots and speaks its number automatically.
// No image files or image mappings are needed.
const NUMBER_LESSONS = [0, 1, 2, 3, 4, 5];

function render_numbers() {
  NUMBER_LESSONS.forEach((number, index) => {
    const label = String(number);
    tile(label, '', label, index, 'number');
  });
}
