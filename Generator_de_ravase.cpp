///eu am copiat o lista de 350 de motto -uri de pe internet
///am facut acest cod ca sa le fac sa arate cum vreau eu, adica fara indice (1,2,3..) si sa aibe ghilimele pt ca citeaza pe cineva
///si de asemenea le am pus virgula intre ele pt a putea fi usor integrate intr un array in js cu copy paste

#include <iostream>
#include <cstring>
#include<fstream>

using namespace std;
int main()
{
    ifstream f("date.in");
    ofstream g("date.out");

    string str;
    char x,y;
    f>>y;
    int s=0;
    for(int i=1;i<=150;i++)
    {
        int k=i;
        while(k!=0)
            {f>>x; k/=10;}
        f>>x;

        getline(f, str);

        if(str.length()<100)    //vreau doar citate scurte.
            {s++;g <<"\" "<<y<<"\""<< str <<y<<"\""<<" \""<<" ,";}

         // a blank line
        getline(f, str);

    }
    cout<<s;
    return 0;
}
