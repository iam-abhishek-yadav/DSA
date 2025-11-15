class Solution {
  unionArray(nums1, nums2) {
    const res = [];
    let i = 0,
      j = 0;
    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
        if (res[res.length - 1] !== nums1[i]) res.push(nums1[i]);
        i++;
      } else if (nums1[i] > nums2[j]) {
        if (res[res.length - 1] !== nums2[j]) res.push(nums2[j]);
        j++;
      } else {
        if (res[res.length - 1] !== nums1[i]) res.push(nums1[i]);
        i++;
        j++;
      }
    }
    return res.concat(nums1.slice(i)).concat(nums2.slice(j));
  }
}
