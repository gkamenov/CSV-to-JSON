# CSV-to-JSON
Simple javascript function to convert CSV into JSON. It will respect double quotes and new line characters within quoted fields. Empty rows are ommited. All fields in resulting JSON are strings.


Example:

<code>
var json;
json = csvToJSON('1;text;"quoted text with ""quotas"";;etc.');
</code>


Result will be:

<code>
json = [ 
{
  A: '1',
  B: 'text',
  C: 'quoted text with "quotas"',
  D: '',
  E: 'etc.'
}
]
</code>


