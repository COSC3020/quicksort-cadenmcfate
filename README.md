[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZLHpg3lN)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Answer

This iterative implimentation of quicksort uses a pseudo-stack that contains the 'jobs' we wish to execute. The jobs are arrays that contain three values: [lo, p, hi], which are derived from previous jobs. To process these jobs we will call qsort(array, lo, p-1) and qsort(array, p+1, hi) until all the valid jobs have been processed and the quicksort is complete.

With that being said, our worst case is similar to that of the recursive implimentation of quicksort. We will make $n-1$ comparisons, and then push to the stack two jobs of size $0$ and $n-2$. With this pattern occuring for each job, we reach a summation:

$\sum\limits_{i=1}^{n-1} i = \frac{(n-1)(n-2)}{2} = n^2\in\Theta(n^2)$

Hence, $\Theta(n^2)$ is the bound for the worst-case runtime.
