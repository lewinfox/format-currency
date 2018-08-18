# format-currency

A function to duplicate functionality of the R function `scales::dollar_format`.

Accepts numeric and string input. Choose your own currency symbol (default "£"), major unit separator (default ",") and decimal separator (default "."). By default, does not print minor units (pence, cents) for amounts over 10,000 but this is customisable.

Examples:
```javascript
formatCurrency(1234.56)
"£1,234.56"

formatCurrency(123456.789, prefix = "$")  // cents will not be printed 
"$123,456"

formatCurrency(123456.789, prefix = "$", displayMinorUnitsLimit = 1000000)  // cents will be printed 
"$123,456.79"

formatCurrency(123456.789, prefix = "$", displayMinorUnitsLimit = 1000000, majorSep = "!", decimalSep = "-") 
"$123!456-79"
```
