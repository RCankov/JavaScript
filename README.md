# JavaScript

Tento JavaScript kód je navržen pro správu a výpočet ceny objednávky na webové stránce. Obsahuje funkce, které se starají o interakce s formulářem, jako je odeslání formuláře, výpočet ceny na základě uživatelských vstupů a validace dat.

Funkce handleSubmit

Při kliknutí na tlačítko "Submit" se spustí funkce handleSubmit, která zabraňuje výchozímu odeslání formuláře, zobrazí potvrzovací zprávu, resetuje formulář a deaktivuje tlačítko submit.

Funkce vypoctiCenu

Funkce vypoctiCenu načítá hodnoty z různých polí formuláře, jako je cena krmiva, množství a další vlastnosti, a vypočítá celkovou cenu objednávky. Výsledná cena je zobrazena ve formuláři.

Funkce zkontrolujCenu

Funkce zkontrolujCenu porovná zadanou částku s vypočítanou cenou. Pokud je částka dostatečná, zobrazuje pozitivní zprávu a aktivuje tlačítko submit, jinak zobrazí varování a tlačítko deaktivuje.

Funkce validateEmail

Funkce validateEmail zajistí, že e-mailová adresa obsahuje pouze povolené znaky, čímž pomáhá udržet data čistá a správná.
Celkově tento kód pomáhá uživatelům efektivně spravovat a odesílat své objednávky tím, že automatizuje výpočty a validace vstupů ve formuláři. 
Pokud potřebujete implementovat takový systém na svou webovou stránku, tento kód vám poslouží jako skvělý výchozí bod.
