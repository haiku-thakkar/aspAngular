using System;
using System.Collections.Generic;

namespace EmpMngmnt.Models
{
    public partial class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string ContactNumber { get; set; }
        public string Addr { get; set; }
        public string UserName { get; set; }
        public string Pwd { get; set; }
        public string Gender { get; set; }
        public string Qualification { get; set; }
        public string Experience { get; set; }
        public string Lang { get; set; }
    }
}
