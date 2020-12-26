using System;
using System.Collections.Generic;
using System.Text;

namespace LasFlores.Data.Entities
{
    public class Member
    {
        public string Id { get; private set; }
        public string Name { get; private set; }
        public string MemberNumber { get; private set; }
        public string Phone { get; private set; }
        public string Identification { get; private set; }

        public Member(string id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}
