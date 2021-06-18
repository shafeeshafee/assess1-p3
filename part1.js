// QUESTION 1
function frequencyCounter(input) {
	let counter = {};
	let inputSplit = input.split(" ");

	for (let item of inputSplit) {
		counter[item.toLowerCase().replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g, "")] = counter[item] + 1 || 1;
	}

	return counter;
}

// QUESTION 2
function mergeArr(nums1, m, nums2, n) {
	let counter = 0;
	const ascending = (a, b) => a - b;

	for (let i = 0; i < nums1.length; i++) {
		if (nums1[i] === 0) {
			counter++;
			if (counter === n) {
				nums1.splice(nums1.length - n);
			}
		}
	}
	nums1.push(...nums2);
	nums1.sort(ascending);
}

// QUESTION 3

/*

SELECT ord_no, ord_date, purch_amt
FROM orders
WHERE salesman_id=5001;

*/

// QUESTION 4

/*

SELECT salesman.name, customer.cust_name, customer.city
FROM salesman
INNER JOIN customer
ON salesman.city=customer.city;

*/

// QUESTION 5

/*

SELECT
   * 
FROM
   nobel_win 
WHERE
   (
      subject = 'Physiology' 
      AND year < 1971
   )
UNION
(
SELECT
   * 
FROM
   nobel_win 
WHERE
   (
      subject = 'Peace' 
      AND year >= 1974
   )
);

*/
