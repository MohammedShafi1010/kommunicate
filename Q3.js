function reverseNumber(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverseNumber(149));