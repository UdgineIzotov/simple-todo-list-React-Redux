/**
 * Created by Evhenii_Izotov on 2/2/2018.
 */
export default class Category {
    constructor(id, categoryName = 'category', isSubCategoriesDisplayed = false) {
        this.id = id;
        this.name = categoryName;
        this.isSubCategoriesDisplayed = isSubCategoriesDisplayed;
    }
}