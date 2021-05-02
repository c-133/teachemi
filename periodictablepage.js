const APP = {};

window.onload = function()
{
    SetEventHandlers();

    APP.periodictable = new PeriodicTable();

    APP.display = new PeriodicTableDisplay(APP.periodictable, "periodictable", "infoboxbackground", "infobox");

    APP.filterinputs =
	{
		name: document.getElementById("namefilter"),
	
	
		category: document.getElementById("categoryfilter"),
	
	};
}


function SetEventHandlers()
{
    document.getElementById("btnApplyFilter").onclick = ApplyFilter;
    document.getElementById("btnClearFilter").onclick = ClearFilter;

    document.getElementById("colorblock").onclick = ColorByBlock;
    document.getElementById("colorcategory").onclick = ColorByCategory;
}


function ColorByBlock()
{
    this.blur();

    document.getElementById("categorykey").style.display = "none";
    document.getElementById("blockkey").style.display = "inline";

    APP.display.ColorByBlock();
}


function ColorByCategory()
{
    this.blur();

    document.getElementById("blockkey").style.display = "none";
    document.getElementById("categorykey").style.display = "inline";

    APP.display.ColorByCategory();
}


function ApplyFilter()
{
    filtercriteria =
    {
        name: APP.filterinputs.name.value,
  
        category: APP.filterinputs.category.value,
     
    };

    APP.periodictable.ApplyFilter(filtercriteria)
}


function ClearFilter()
{
    APP.filterinputs.name.value = "";

    APP.filterinputs.category.value = "";


    APP.periodictable.ClearFilter();
}
