# Coding important terms and there uses AND STL and tricks

**NOTE- AGAR KABHI QUESTIONS MEIN “TLE ” LAG JAYE TAB AGAR HUM VALUES OF BY REFERENCES KARDE TOH ANSWER PASS HO JAYEGA**

# C++ STL Quick Help

It contains C++ STLs usage and quick help with easy to understand comments and examples (copy+paste to use). I learned these while solving different kinds of Leetcode Questions.

I will be using "int, string etc" for ease and not complex entities like pairs, structs etc 😉. You can replace it with any data structure If you are confused with the syntax or description, see the example. I am sure that will clear things BECAUSE I have specifically chosen

🔎 "EASY + IMPORTANT + MOST USED" examples. Last but not least, I have added Leetcode Qns also which can be easily solved using STLs

### 📝Different ways of using priority_queue (i.e. heap) 🗻

- Default declarations

```cpp
priority_queue<int> pq;                            //creates max-heap
priority_queue<int, vector<int>> pq;               //creates max-heap
```

- writing comparator function for priority_queue

```cpp
1. Using in-built comparator provided by C++ : 

priority_queue<int, vector<int>, greater<int>> pq;  //creates min-heap
priority_queue< pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>> > pq; //min_heap of pairs
priority_queue< pair<int, int>, vector<pair<int, int>>, greater<> > pq;               //min_heap of pairs
```

```cpp
2. Using user defined comparator as a structure

struct comp {
    bool operator()(int &a, int &b) {
        return a<b; //max-heap
        return a>b; //min-heap
    }
};

priority_queue<int, vector<int>, comp> pq;  //usage
```

```cpp
3. Using user defined comparator as a function

static bool comp(int &a, int &b) {
    return a<b; //max-heap
    return a>b; //min-heap
}

priority_queue<int, vector<int>, function<bool(int&, int&)> > pq(comp);   //usage
```

```cpp
4. Using lambda function

auto comp = [](int &a, int &b) {
    return a<b; //max-heap
    return a>b; //min-heap 
};

priority_queue<int, vector<int>, decltype(comp) > pq(comp);   //usage

NOTE :
You can receive parameters inside [] as well i.e. auto comp = [some_parameters]
Ex : You want to access a map inside this lambda function
unordered_map<int, int> mp;

auto comp = [&mp](int &a, int &b) {
    return mp[a] < mp[b]; //etc.
};
```

### 📝 When and why to use std::move() ⬅️

```cpp
/*
    To efficiently transfer the resources from source to target.
    By efficient, I mean no usage of extra space and time for creating copy.
*/
Examples :
    string source = "MIK";
    string target = "";
    target = std::move(source);
    cout << " source = " << source << endl;
    cout << "target = "  << target << endl;
    /*
        output :
        source = 
        target = "MIK"
    */
    
    vector<string> v;
    string str = "example";
    v.push_back(std::move(str));
    /*
    After this, str becomes empty i.e. ""
    And while moving str inside v, no extra copy of str was done implicitly.
    */

    vector<int> temp{1, 2, 3};
    vector<vector<int>> result;
    result.push_back(std::move(temp));
    /*
    This allows no copy of "temp" being created.
    It ensures that the contents of "temp"
    will be moved into the "result".  This is less
    expensive, also means temp will now be empty.
    */
```

### 📝 std::accumulate(begin_iterator, end_iterator, initial_sum) ➕

```cpp
int sum = 0;
vector<int> nums{1, 3, 2, 5};
sum = accumulate(begin(nums), end(nums), 0);

cout << sum; //11

Benefit : You didn't have to write for loop to find the sum
```

### 📝 std::accumulate(begin_iterator, end_iterator, initial_sum, binary_op) ➕

```cpp
binary_op : Binary operation taking an element of type <initial_sum> as first argument and an
            element in the range as second, and which returns a value that can be assigned to type T.

Example : 

auto myBinaryOp = [&](int s, long n) {
    return s + n*n; //sums the square of numbers
    //You can call any other function inside as well instead of n*n
};

int sum = 0;
vector<int> nums{1, 3, 2, 5};
sum = accumulate(begin(nums), end(nums), 0, myBinaryOp);

cout << sum; //39

Beautiful example and usage :
https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/discuss/1305961/C%2B-(A-very-simple-Two-Sum-like-approach)
```

### 📝 min_element(begin_iterator, end_iterator), max_element(begin_iterator, end_iterator), minmax_element(begin_iterator, end_iterator) 😲

```cpp
vector<int> nums{1, 3, 2, 5};

int minimumValue = *min_element(begin(nums), end(nums)); //1
int maximumValue = *max_element(begin(nums), end(nums)); //5
                OR,
        auto itr  = minmax_element(begin(nums), end(nums));
int minimumValue  = *itr.first;  //remember, first is minimum  //1
int maximumValue  = *itr.second; //remember, second is maximum //5

Benefit : You didn't have to write for loop to find the max or min element
```

### 📝 upper_bound(), lower_bound() in sorted vector, ordered set, ordered map 📤

```cpp
For vector:
vector<int> vec{10,20,30,30,20,10,10,20};
vector<int>::iterator up  = upper_bound(begin(vec), end(vec), 35);//returns iterator to first element "greater" than 35
vector<int>::iterator low = lower_bound(begin(vec), end(vec), 35);//returns iterator to first element "greater or equal" to 35
cout << "upper_bound at position " << (up - vec.begin()) << '\n';
cout << "lower_bound at position " << (low- vec.begin()) << '\n';

For set:
st.upper_bound(35); //returns iterator to first element "greater" than 35
st.lower_bound(35); //returns iterator to first element "greater or equal" than 35

For map:
mp.upper_bound(35); //returns iterator to first element "greater" than 35
mp.lower_bound(35); //returns iterator to first element "greater or equal" than 35

Benefit : You didn't have to write binary search (in case of vector),
JAVA's tree_map equivalent in C++ (in case of map or set)
There are amazing applications or problems that can be solved using the above concepts.
Example : My Calendar I (Leetcode - 729) -
         You can find it in my interview_ds_algo repository as well B-)
```

### 📝 std::rotate 🌀

```cpp
vector<int> vec{1, 2, 3, 4};
int n = vec.size();
int k = 2;

rotate(vec.begin(), vec.begin()+k, vec.end());   //Left Rotate by K times

rotate(vec.begin(), vec.begin()+n-k, vec.end()); //Right Rotate by K times
```

### 📝 To check if some rotation of string s can become string t🌀

```cpp
string s = "abcde";
string t = "cdeab";

cout << (s.length() == t.length() && (s+s).find(t) != string::npos) << endl;
```

### 📝 std::next_permutation ➡️

```cpp
It gives the next lexicographically greater permutation.
So, if the container is already the greatest permutation (descending order), it returns nothing.

vector<int> vec{1, 2, 3, 4};
    
if(next_permutation(begin(vec), end(vec)))
    cout << "Next permutation available" << endl;

for(int &x : vec)
    cout << x << " ";
    
//Output : 1, 2, 4, 3

Also see : std::prev_permutation() - It gives just the previous lexicographically smaller permutation.
But I have never encountered any question where it's required till now. So you can skip it.
    Leetcode - 31  : Next Permutation
    etc.
```

### 📝 std::stringstream ⏩

```cpp
Usage:
1) Converting string to number
2) Count number of words in a string

Example-1
    string s = "12345";
    stringstream ss(s);
 
    // The object has the value 12345 and stream
    // it to the integer x
    int x = 0;
    ss >> x;
    cout << x;
    
Exmaple-2
    stringstream s(ss);
    string word; // to store individual words
  
    int count = 0;
    while (s >> word)
        count++;
    cout << count;
    NOTE: It will tokenize words on the basis of ' ' (space) characters
Example-3
    It can be used very well to extract numbers from string.
    string complex = "1+1i";
    stringstream ss(complex);
    char justToSkip;
    int real, imag;
    ss >> real >> justToSkip >> imag >> justToSkip;
    cout << real << ", " << imag; //output : 1, 1
    
    Other application on this STL :
    Leetcode - 151  : Reverse Words in a String
    Leetcode - 186  : Reverse Words in a String II
    Leetcode - 557  : Reverse Words in a String III
    Leetcode - 1108 : Defanging an IP Address
    Leetcode - 1816 : Truncate Sentence
    Leetcode - 884  : Uncommon Words from Two Sentences
    Leetcode - 537  : Complex Number Multiplication (Example-3 above)
    etc.
```

### 📝 std::transform(InputIterator first1, InputIterator last1, OutputIterator result, 
``

```cpp
Applies an operation sequentially to the elements of one (1) or
two (2) ranges and stores the result in the range that begins at result.
Uage :
1) Convert all letters of a string to lower case
2) Convert all letters of a string to upper case

Example : 
    string line = "Hello world, this is MIK";

    transform(begin(line), end(line), begin(line), ::tolower);

    cout << line << endl;

    transform(begin(line), end(line), begin(line), ::toupper);

    cout << line << endl;
```

### 📝 std::regex_replace 📟

```cpp
It converts a regular expression given by user to desired expression given by user.

Example : 
    Ex-1 - Remove all vowels from a string.
    string s = "mika";
    auto rgx = regex("[aeiouAEIOU]");
    cout << regex_replace(s, rgx, "");
    
    Ex-2 - Replace all '.' to "[.]"
    string s = "1.2.3.4";
    auto rgx = regex("\\.");
    regex_replace(s, rgx, "[.]");
    
    Note : You can write smart regex for achieving amazing replacements.
    Qns on Leetcode:
    Leetcode - 1108 : Defanging an IP Address
    Leetcode - 1119 : Remove Vowels from a String
    etc.
```

### 📝 std::count_if 🔢

```cpp
counts the number of elements satisfying a given condition (given by comparator function or lambda)

Example : 
    vector<int> vec{1, 3, 2, 0, 5, 0};

    auto lambda = [&](const auto& i) {
        return i == 0;
    };

    cout << count_if(begin(vec), end(vec), lambda); //output : 2
    
    Note : You can write any kind of lambda/comparator functions for matching your required condition
    Qns on Leetcode:
    Leetcode - 1773 : Count Items Matching a Rule
    etc.
```

### 📝 std::copy_if 🔢

```cpp
Copies the elements to a container
how copy_if function works : in this function you have to pass four parameters 
copy_if(begin iterator , end iterator , destination , condition)
			
    eg :    vector<int> from_vec = {1,2,3,4,5,6,7,8,9,10};
            vector<int> to_vec;
            //here i want to copy all the number from from_vec vector to to_vec vector which are divisible by 2 .
            
            copy_if(from_vec.begin(), from_vec.end(), back_inserter(to_vec),[](int n){return n%2==0;});
            
            for(auto it : to_vec) 
                cout<<it<<" ";
            o/p : 2 4 6 8 10
Example : 
    Note : You can write any kind of lambda/comparator functions for matching your required condition
    Qns on Leetcode:
    Leetcode - 1796 : Second Largest Digit in a String
    etc.
```

### 📝 Writing lambda for upper_bound or lower_bound for vector<pair<int, string>> 🔢

```cpp
Example : 
        //Let's say you want upper_bound for a variable timestamp, take it in a pair (because it's a vector of pair)
        pair<int, string> ref = make_pair(timestamp, "");
            
        auto lambda = [](const pair<int, string>& p1, const pair<int, string>& p2) {
            return p1.first < p2.first;
        };
        
        auto it = upper_bound(begin(my_vector), end(my_vector), ref, lambda);
	
	Qns on Leetcode:
    	Leetcode - 981 : Time Based Key-Value Store
```

### 📝 Writing lambda for unordered_map to make life simple 🔢

```cpp
Example : 
        //Let's say, you want to store different evaluate logic for different operator "+", "-", "*", "/"
	unordered_map<string, function<int (int, int) > > mp = {
            { "+" , [] (int a, int b) { return a + b; } },
            { "-" , [] (int a, int b) { return a - b; } },
            { "*" , [] (int a, int b) { return a * b; } },
            { "/" , [] (int a, int b) { return a / b; } }
        };
	
	//Simply use it like below :-
	int result = mp["+"](1, 2); //This will return 1+2 i.e. 3
	
	Qns on Leetcode: 150
	Leetcode - : Evaluate Reverse Polish Notation
```

### 📝 std::set_difference and std::back_inserter 🔢

 

```cpp
set_difference -> Copies the elements from the sorted s1 which are not found in the sorted s2 to a container in sorted order
back_inserter -> Can be used to add elements to the end of a container
Example : 
        set<int> st1, st2;
	vector<int> v1;
	//Find difference in between set1 and set2 and put unique element of set1 in v1
	set_difference(begin(st1), end(st1), begin(st2), end(st2), back_inserter(v1));
	
	Qns on Leetcode: 2215
	Leetcode - : Find the Difference of Two Arrays
```

### 📝 **C++ floor() Function**

The floor() function returns the largest integer that is smaller than or equal to the value passed as the argument (i.e.: rounds down the nearest integer).

```cpp
// C++ program to demonstrate floor function
#include <iostream>
#include <cmath>
using namespace std;

// Driver function
int main()
{
	// using floor function which return
	// floor of input value
	cout << "Floor of 2.3 is : " << floor(2.3) << endl;
	cout << "Floor of -2.3 is : " << floor(-2.3) << endl;

	return 0;
}

Input : 2.3
Output : 2

Input : -2.3
Output : -3
```

### 📝 **C++ ceil() Function**

ceil() function in C++ returns the smallest integer that is greater than or equal to the value passed as the argument (i.e.: rounds up the nearest integer).

```cpp
Input : 2.5
Output : 3

Input : -2.1
Output : -2

// C++ program to demonstrate ceil function
#include <cmath>
#include <iostream>
using namespace std;

// Driver function
int main()
{
	// using ceil function which return
	// floor of input value
	cout << " Ceil of 2.3 is : " << ceil(2.5) << endl;
	cout << " Ceil of -2.3 is : " << ceil(-2.1) << endl;

	return 0;
}
```

**Tips: 
• Any number which is divisible by 9 has the sum of digits adding up to 9 always.
• Therefore, the digital root for any number divisible by 9 is always 9.
• The digital root (ans) for 0 is always 0.
• For any number that isn't 0 and isn't divisible by 9, the digital root (ans) will always be n % 9, where n is the given number.
• This is because the difference between the given number and the nearest number that is divisible by 9 will always be a multiple of 9, and therefore have a digital root of 9.
• This algorithm skips the "add digits until there is only 1 remaining" method for finding the digital root.**

**NOTE - The Leetcode problem may be misleading in its description, but it is important to learn all of these tricks.**

**VECTORS-**

`vector<int>a(5,0)`  → [0,0,0,0,0]

`a.capacity()` → kitna element ke liye space para huwa hain 

`a.front()` → returns the 1st element,

`a.back()` → returns the last element. 

`v1.insert(v1.end(),v2.begin(),v2.end());`  → inserting one vectors value to other

**v1.insert ( position kaha se gusega values  , v2 vector ke begin se , v2 vector ke end tak )**

`v.clear()` → clears a vector pura khali kar deta hain

`vector::erase()`

*erase()* function is used to remove elements from a container from the specified position or range.

**Syntax:**

```
vector_name.erase(position);    for deletion at specific position
vector_name.erase(starting_position,ending_position);    // for deletion in range
```

# vector::push_back() and vector::pop_back() in C++ STL

**vector::push_back()**

push_back() function is used to push elements into a vector from the back. The new value is inserted into the vector at the end, after the current last element and the container size is increased by 1.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5f1140af-769f-485e-8579-74530558d93b/Untitled.png)

## FOR 2D ARRAY QUESTIONS

- the number of rows in a 2D array because the length of a 2D array is equal to the number of rows it has. The number of columns may vary row to row, which is why the number of rows is used as the length of the 2D array.
- When calling the length of a column, we pinpoint the row before using **.length**. The program above checks to see how many columns the first row of the 2D array contains by calling array[0].length. Adjust the 0 to another number to change the row specified.
- `int lenOne=exampleVariableOne.length;`

→ **returns the length of the rows in the array**

- `int lenTwo=exampleVariableOne[0].length;`

→ **returns the length of the columns in the    array**

→ Adjust the `0` to another number to change the row specified.

[new and delete Operators in C++ For Dynamic Memory - GeeksforGeeks](https://www.geeksforgeeks.org/new-and-delete-operators-in-cpp-for-dynamic-memory/)

# **vector::push_back() vs emplace**

### [**push_back()**](https://www.geeksforgeeks.org/vectorpush_back-vectorpop_back-c-stl/):

This method is used to insert elements in a vector from the end of the container. As the flexibility in the [**size of the vector**](https://www.geeksforgeeks.org/vectorempty-vectorsize-c-stl/) is dynamic, **the size of the container also increased by 1 after inserting any new element.**

### [**emplace_back()**](https://www.geeksforgeeks.org/vectoremplace_back-c-stl/):

This method is used instead of [**creating the object**](https://www.geeksforgeeks.org/make-class-whose-objects-can-dynamically-allocated/) using [**parameterized constructor**](https://www.geeksforgeeks.org/how-to-initialize-array-of-objects-with-parameterized-constructors-in-c/) and allocating it into a different memory, then passing it to the [**copy constructor**](https://www.geeksforgeeks.org/copy-constructor-in-cpp/), which will [**insert it into the vector**](https://www.geeksforgeeks.org/vector-insert-function-in-c-stl/). **This function can directly [insert the object without calling the copy constructor](https://www.geeksforgeeks.org/preventing-object-copy-in-cpp-3-different-ways/).**

|  | **Push_back** | **emplace_back** |
| --- | --- | --- |
| **1.** | It is used to insert the element in a vector or a string | It is used to insert an element in a vector or a string. |
| **2.** | It is slower. | It is faster. |
| **3.** | Its syntax is :
**push_back(value_to_insert)** | Its syntax is -:
**emplace_back(value_to_insert)** |
| **4.** | push_back accepts the only object of the type if the constructor accept more than one arguments | emplace_back accept arguments of the constructor of the type. |

## Max element in an array or vector-

`*max_element(vec_name.begin(),vec_name.end())`

→ finds the max element

## Min element in an array or vector-

`*min_element(vec_name.begin(),vec_name.end())`

→ finds the min element

## Pairs-

```cpp
pair<int,int>p={1,3};
cout<<p.first<<" "<<p.second; // -> 1 3

pair<int, pair<int,int>>p={1,{2,3}};
cout<<p.first<<" "<<p.second.first<<" "<<p.second.second; // -> 1 2 3
```

## Deque-

`#include<deque>`

`deque<int>d;`

`d.push_back();` 

`d.push_front ();`

`d.pop_front();`

`d.pop_back();`

`d.front();`

`d.back();`

`d.erase(d,begin(),d.begin+1);` 

  OR USE THIS → 

**agar koi specific element delete karna ho toh** `P.erase(P.begin()+j);`  

j → position of the element to delete ( this or one is only working for leetcode )

→ kaha se kaha tak delete karna hain

→ ‘**here’** **it deletes the 1st element from the first**

## List-

- using doubly linked list , list is made
- direct access not possible

`#inlcude<list>`

`list<int>l;`

`l.push_back();` 

`l.push_front ();`

`l.pop_front();`

`l.pop_back();` 

## Stack-(lifo)

`Stack<int>s;`

`s.push();` 

`s.pop();`

`s.top();`

`s.empty();`

## Queue-(fifo)

`queue<int>s;`

`s.push();` 

`s.pop();`

`s.top();`

`s.empty();`

## Priority Queue -(ek aisi queue jisiki first element greatest ho)

- relates to heap

`priority_queue<int> maxi;` → max heap (by default )

 `priority_queue<int,vetor<int>, greater<int> > mini;` → min heap

`maxi.push();`

`maxi.pop();`

`maxi.top();`

## Set-

- also known as ordered_set
- stores unique elements
- implementation based on BST
- elements after inserting (O(n))  can’t be modified
- elements are returned in sorted order.

### unordered set-

- slow than set
- elements are random not in a sorted order.

`set<int>s;  or  ordered_set<int>s;`

`s.insert(5);`

`s.insert(5);`

`s.insert(6);`

```cpp
5
6
```

`s.erase();`

`s.count(5);` → returns 1 as true.

`s.count(7);` → returns 0 as false. (kiuki hain hi nahi)

`set<int>::iterator itr = s.find(5);` → returns iterator of 5

`for(auto it=itr;it≠s.end();it++){`

`cout<<it<<” “;`

`}cout<<endl;`

| `s.insert();` | `s.find();` | `s.erase();` | `s.count()`; | **O(logn)** |
| --- | --- | --- | --- | --- |

| `s.size();` | `s.begin();` | `s.end();` | `s.empty();` | **O(1)** |
| --- | --- | --- | --- | --- |

## Maps-

- datas are stored as key value.
- implementation based on balanced tree.
- all the keys are unique.
- and 1 key points towards 1 value.
- 2 keys might point to same value but 1 key points to 2 values not possible.

### **!!!!!** **NOTE  !!!!!-**

- **`mp.find(nums[i]+1)==mp.end()`**  → **this means that agra tumko desired element mil gaya MAP mein**
- **`map.find(nums[i]+1) != map.end()` → this means that agra tumko desired element nahi mila MAP mein**

- **Unordered map**

```cpp
int main(){
map<int,string>m;              

m[1]=”bhatt”;

m[2]=”parijat”;

m[13]=”kumar”;
m.insert(5,"poborojo");
for( auto:m){
cout<<i.first<<" "<<i.second<<" "; /*op- 1 bhatt 
																				 2 parijat 
                                        13 kumar */
}
                                /*   op- 1 bhatt 
																				 2 parijat 
                                         5 poborojo
                                        13 kumar */

for(int i=0;i<nums.size();i++){
		mp[nums[i]];
}

```

`m.count(13);`

return 1 if true

0 if not 

`s.erase(13);`

```cpp
for(auto:m){
cout<<i.first<<" "<<i.second<<" ";
/*                                  op-  1 bhatt 
																				 2 parijat 
                                         5 poborojo
*/
```

| `m.insert()` | `m.erase()` | `m.find()` | `m.count();` | **O(logn)** |
| --- | --- | --- | --- | --- |
- `unordered_map<int,string>mp;` → implemnetation from hash table
- T.C-**O(1)**

```cpp
// To find the duplicates in an array 
T.C= O(n) S.C=O(n)

vector<int> findDuplicates(vector<int>& nums) {
        vector<int>ans;
        unordered_map<int,int>mp;
        for(auto i:nums){
            mp[i]++;
        }

        for(auto i:mp){
            if(i.second > 1){
                ans.push_back(i.first);
            }
        }
        return ans;
    }
```

```cpp
auto it=m.find(5);
for(auto i=it;i!=m.end();i++){
	cout<<(*i).first<<endl;
}
o/p-5
```

### **Lamda function-**

https://leetcode.com/problems/sort-array-by-increasing-frequency/description/

Approach:

1. First made an unordered map and then map mein values dala
2. sort kiya with a lamda function
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d74c3414-3393-4d9d-9a34-b7a0659f0687/Untitled.png)
    
3. then `return mp[a]!=mp[b] ? mp[a] < mp[b] : a>b ;` agar a aur b ka freq different aata hai then return the freq with the smaller one and if same freq aagaya i.e `mp[a]!=mp[b]` → condition is false then we return the one which is greater value ( e.g 3 → 2 times and 2 → 2 times both have same freq then we return 3 first then 2 )

## Algorithms-

`#include<algorithm>`

`binary_search(v.begin(),v.end(),n);`  → n is the number to find.

`lower_bound()` → return an iterator pointing to the first element.

`lower_bound(v.begin(),v.end(),n)-v.begin();` →return an iterator pointing to the first element.

```cpp
#include <bits/stdc++.h>
using namespce std;
  
// Driver code
int main()
{
    // Input vector
    vector<int> v{ 10, 20, 30, 30, 30, 40, 50 };
  
    // Print vector
    cout << "Vector contains :";
    for (unsigned int i = 0; i < v.size(); i++)
       cout << " " << v[i];
    cout << "\n";
  
    vector<int>::iterator low1, low2, low3;
      
    // lower_bound
    low1 = lower_bound(v.begin(), v.end(), 30);
    low2 = lower_bound(v.begin(), v.end(), 35);
    low3 = lower_bound(v.begin(), v.end(), 55);
  
    // Printing the lower bounds
    cout
        << "\nlower_bound for element 30 at position : "
        << (low1 - v.begin());
    cout
        << "\nlower_bound for element 35 at position : "
        << (low2 - v.begin());
    cout
        << "\nlower_bound for element 55 at position : "
        << (low3 - v.begin());
  
    return 0;
}

//o/p-
Vector contains : 10 20 30 30 30 40 50

lower_bound for element 30 at position : 2
lower_bound for element 35 at position : 5
lower_bound for element 55 at position : 7
```

`upper_bound()` → returns an iterator pointing to the immediate next element which is just greater than k.

```cpp
#include <bits/stdc++.h>
using namespace std;
int main()
{
    set<int> s;
 
    // Function to insert elements
    // in the set container
    s.insert(1);
    s.insert(4);
    s.insert(2);
    s.insert(5);
    s.insert(6);
 
    cout << "The set elements are: ";
    for (auto it = s.begin(); it != s.end(); it++)
        cout << *it << " ";
 
    // when 2 is present
    // points to next element after 2
    auto it = s.upper_bound(2);
    cout << "\nThe upper bound of key 2 is ";
    cout << (*it) << endl;
 
    // when 3 is not present
    // points to next greater after 3
    it = s.upper_bound(3);
    cout << "The upper bound of key 3 is ";
    cout << (*it) << endl;
 
    return 0;
}
//o/p-
The set elements are: 1 2 4 5 6 
The upper bound of key 2 is 4
The upper bound of key 3 is 4
```

`string s=”abcd”;`

`reverse(s.begin(),s.end());`

o/p- dcba

### Sort-

`sort(s.begin(),s.end());`  → **intro sort(n log n)** i.e 3 alog based sort (quick sort, insertion sort, heap sort).

## Bit manipulation-

Basics-

- **Get ith bit:**
Mask: Right shift n ‘i’ times, and check the first bit.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/233cf862-3918-4630-ab48-92971d968736/Untitled.png)

- **Set ith bit:**
Mask: 1 << i
Bitwise OR operation between n and mask sets the i
th bit to one.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e83e9b16-0617-4041-bcda-1073e13cd2a4/Untitled.png)

- **Clear ith bit**
Mask: ~ (1 << i )
In the mask, all the bits would be one, except the i   
th bit. Taking bitwise AND with n
would clear the i
th bit.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eb6cadea-113e-4ec5-9e06-bddad6da580d/Untitled.png)

- **Update i’th bit to the given value**
Mask: mask has all the bits set to one except i
th bit.
n = n & mask, i
th bit is cleared.
Now, to set i
th bit to value, we take value << pos as the mask.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e108720f-a23f-4ce2-9f11-77aae6a1eac1/Untitled.png)

- **Toggle bit**
    
    Toggling a bit means that if K-th bit is 1, then change it to 0 and if it is 0 then change it to 1
    

```cpp
int getBit(int n, int pos)
{
    return ((n & (1 << pos)) != 0);
}

int setBit(int n, int pos)
{
    return (n | (1 << pos));
}

int clearBit(int n, int pos)
{
    return (n & ~(1 << pos));
}

int updateBit(int n, int pos, int value)
{
    int store = ~(1 << pos);
    n = n & store;              
    return (n | (value << pos)); 
}
int toggleBit(int n, int pos)
{
    return (n xor (1 << pos));
}
int main()
{
    cout << getBit(5, 2) << endl;
    cout << setBit(5, 1) << endl;
    cout << clearBit(5, 2) << endl;
    cout << updateBit(5, 1, 1)<<endl;
    cout << toggleBit(5, 2) << endl; //*5 = 101 and (1<<pos)=100 and 101 ^ 100 = 001

    return 0;
}
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0cb81da9-2f8e-45e9-baab-7c971e30fc57/Untitled.png)

```cpp
#include<bits/stdc++.h>

 using namespace std;

 int main()
{
    string s;
    
      cin>>s;
      
      map<char , int >m;
      
         map<char , int >::iterator itr;
       
      for(long i=0;i<s.length();i++)
        m[s[i]]++;
        
        for(itr=m.begin();itr!=m.end();itr++)
          
            cout<<itr->first<<" - "<<itr->second<<endl;
}
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5be1cced-4a20-445f-94c4-300bf34764a0/Untitled.png)

### To push a pair into a vector

e.g 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9f59090f-66b4-4645-889c-7a0f852d9c39/Untitled.png)

`vector<vector<<int>>ans;`

`ans.push_back({arr[i],arr[i+1]});`

### e.g Questions

Given an array of **distinct** integers `arr`, find all pairs of elements with the minimum absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair `[a, b]` follows

- `a, b` are from `arr`
- `a < b`
- `b - a` equals to the minimum absolute difference of any two elements in `arr`