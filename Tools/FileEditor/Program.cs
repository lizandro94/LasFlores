using System;
using System.IO;

namespace FileEditor
{
    class Program
    {
        static void Main(string[] args)
        {
            string json = File.ReadAllText("C:\\Code\\LasFlores\\members.json");
            dynamic membersList = Newtonsoft.Json.JsonConvert.DeserializeObject(json);

            foreach (var member in membersList)
            {
                member["householdMember"] = string.Empty;
                member["address"] = string.Empty;
                member["personStatusFlags"] = string.Empty;
                member["birth"] = string.Empty;
            }

            //jsonObj["Bots"][0]["Password"] = "new password";
            string output = Newtonsoft.Json.JsonConvert.SerializeObject(membersList, Newtonsoft.Json.Formatting.Indented);
            File.WriteAllText("C:\\Code\\LasFlores\\members.json", output);
            Console.WriteLine("Hello World!");
        }
    }
}
