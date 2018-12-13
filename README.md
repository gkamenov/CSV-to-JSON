# CSV-to-JSON
Simple javascript function to convert CSV into JSON. It will respect double quotes and new line characters within quoted fields. Empty rows are omitted. All fields in resulting JSON are of type string.
First parameter is string containgin CSV text, second parameter is symbol for separator, by default ";". 
There is no separator autodetection or guessing type of data implemented.


Example use:

<code>
var json;
json = csvToJSON('1;text;"quoted text with ""quotas"";;etc.');

/*
json = [ 
{
  A: '1',
  B: 'text',
  C: 'quoted text with "quotas"',
  D: '',
  E: 'etc.'
}
]
*/
</code>


