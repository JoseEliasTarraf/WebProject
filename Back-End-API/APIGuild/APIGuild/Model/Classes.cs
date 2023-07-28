namespace APIGuild.Model
{
    public class Classes
    {
        public int ID { get; set; }
        public int PA { get; set; }
        public int PAA { get; set; }
        public int PD { get; set; }
        public int LVL { get; set; }
        public int GS { get; set; }
        public int UserId { get; set; }
        public string? FamilyName { get; set; }
        public string? CharName { get; set; }

        public Classes(int iD, int pA, int pAA, int pD, int lVL, int gS, int userId,string? familyName, string? charName)
        {
            ID = iD;
            PA = pA;
            PAA = pAA;
            PD = pD;
            LVL = lVL;
            GS = gS;
            UserId = userId;
            FamilyName = familyName;
            CharName = charName;
        }

        public Classes()
        {  
        }
    }
}
