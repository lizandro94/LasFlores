using LasFlores.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace LasFlores.Data.Extensions
{
    public static class MembersExtensions
    {
        public static IEnumerable<object> GetMembers(this DbSet<Member> members)
        {
            return members
                .Select(member => new
                {
                    member.Id,
                    member.Name,
                    member.MemberNumber,
                    member.Identification,
                    member.Phone
                });
        }

        public static void Populate(this DbSet<Member> members)
        {
            if (members.Any())
            {
                return;
            }

            string json = File.ReadAllText("C:\\Code\\LasFlores\\Data\\members.json");
            dynamic jsonMembersList = Newtonsoft.Json.JsonConvert.DeserializeObject(json);
            var membersList = new List<Member>();

            foreach (var member in jsonMembersList)
            {
                var newMember = BuildMember(member);
                membersList.Add(newMember);
            }
            members.AddRange(membersList);
        }

        private static Member BuildMember(dynamic member)
        {
            var id = member["uuid"];
            var firstName = member["nameFormats"]["givenPreferredLocal"];
            var surname = member["nameFormats"]["familyPreferredLocal"];
            var fullName = $"{firstName} {surname}";

            var newMember = new Member(id, fullName);
            return newMember;
        }
    }
}
