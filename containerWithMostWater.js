// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

function maxArea(height) {
     let left = 0, right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const width = right - left;
        const currentArea = width * Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;  
};


height =
[1,8,6,2,5,4,8,3,7]

output // 49
