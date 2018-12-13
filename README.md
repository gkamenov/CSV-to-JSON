# CSV-to-JSON
Simple javascript function to convert CSV into JSON.

Example:

var json;
json = csvToJSON('1;text;"quoted text with ""quotas"";;etc.');

Result will be

json = [ 
{
  A: '1',
  B: 'text',
  C: 'quoted text with "quotas"',
  D: '',
  E: 'etc.'
}
]


