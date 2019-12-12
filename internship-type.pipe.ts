import { Pipe, PipeTransform } from '@angular/core';

@Pipe
({
  name: 'internshipType'
})

export class InternshipTypePipe implements PipeTransform
{
  transform(value: string): string
  {
    
    // Your Code Goes Here
    let v=value;
    
    if(v=="S3")
      return "Summer internship - 3 Months";
    else if(v=="S6")
      return "Summer Internship - 6 Months";
    else if(v=="W3")
      return "Winter Internship - 3 Months";
    else if(v=="W6")
      return "Winter Internship - 6 Months";
    
    
  }
}