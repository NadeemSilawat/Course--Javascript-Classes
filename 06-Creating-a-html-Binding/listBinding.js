
class ListBinding {
    constructor(element) {
        this.listelement = element;
        this.textList = [ ]


    }
    /**Make an <li> text </li> element/tag */
    static createListItem(text) {
        const li = document.createElement('li')

        li.textContent = text

        return li
    }
 
    update() {

        /**Remove all existing <li> element/tages */

        while (this.listelement.firstChild) {
            this.listelement.removeChild(this.listelement.firstChild)
        }

        /**Fill <ul><ol> tag with <li>*/
        for (const text of this.textList) {
            this.listelement.appendChild(ListBinding.createListItem(text))

        }
    }

    add(text){
        this.textList.push(text);
        this.update();
    } 

    remove(index){
        thid.textList.splice(index,1);
        this.update();

    }
    
    


}