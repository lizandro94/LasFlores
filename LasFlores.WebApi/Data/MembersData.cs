using LasFlores.WebApi.Dtos;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace LasFlores.WebApi.Data
{
    public static class MembersData
    {
        public static dynamic GetMembers()
        {
            string json = File.ReadAllText("C:\\Code\\LasFlores\\Data\\members.json");

            var model = JsonConvert.DeserializeObject<List<Member>>(json);
            return model;
        }
    }
}
