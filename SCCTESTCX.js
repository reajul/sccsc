$(document).ready(function () {
  let urlPieces = document.URL.toLowerCase().split("/"); // make lower case so no case sensitivity!

//CreateAccount
  let isCreateAccount = urlPieces[urlPieces.length - 1].startsWith("create");
 
  if (isCreateAccount) { 
      if (document.getElementById('elcn_prospect_studenttypeid')) {
        document.getElementById('elcn_prospect_studenttypeid').addEventListener ("change", defaultAcadTermCA);
        defaultAcadTermCA() ;
      }
    }
});
    
    
//Default Academic Term on Create Account
function defaultAcadTermCA() {
    if (document.getElementById('elcn_prospect_studenttypeid').value == '49a434e2-4e82-e111-9bb4-005056ab0079'){
        document.getElementById('elcn_anticipatedentrytermid').selectedIndex = 1;
        document.getElementById('elcn_anticipatedentrytermid').dispatchEvent(new Event("change"));
        document.getElementById('elcn_anticipatedentrytermid').parentNode.classList.add('hidden');
    } else {
        document.getElementById('elcn_anticipatedentrytermid').parentNode.classList.remove('hidden');
    }
}
