/*
 * @lc app=leetcode id=733 lang=typescript
 *
 * [733] Flood Fill
 */

// @lc code=start
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  if (image[sr][sc] === color) {
    return image;
  }

  let tmp = image[sr][sc];
  image[sr][sc] = color;
  // top check
  if (isInBound(sr - 1, image.length) && image[sr - 1][sc] === tmp) {
    image = floodFill(image, sr - 1, sc, color);
  }
  // right check
  if (isInBound(sc + 1, image[sr].length) && image[sr][sc + 1] === tmp) {
    image = floodFill(image, sr, sc + 1, color);
  }
  // bottom check
  if (isInBound(sr + 1, image.length) && image[sr + 1][sc] === tmp) {
    image = floodFill(image, sr + 1, sc, color);
  }
  // left check
  if (isInBound(sc - 1, image[sr].length) && image[sr][sc - 1] === tmp) {
    image = floodFill(image, sr, sc - 1, color);
  }
  return image;
}

function isInBound(num: number, limit: number): boolean {
  return num > -1 && num < limit;
}
// @lc code=end

// O: array of arrays of numbers
// I: - array of arrays of numbers
//    - 3 numbers
// C: return modified image, dont modify the grid with a different initial color
// E: empty image, out of bound, same color as target

// Pseudocode
// if color is the same return image
// declare a tmp = images[sr][sc]
// images[sr][sc] = color
// if (inBound && images[sr - 1][sc] == tmp)
//   images = recursive call func (images, sr - 1, sc, color)
// if (inBound && images[sr][sc + 1] == tmp)
//   images = recursive call func (images, sr, sc + 1, color)
// if (inBound && images[sr + 1][sc] == tmp)
//   images = recursive call func (images, sr + 1, sc, color)
// if (inBound && images[sr][sc - 1] == tmp)
//   images = recursive call func (images, sr, sc - 1, color)
// return images
