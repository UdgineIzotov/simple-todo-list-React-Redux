/**
 * Created by Evhenii_Izotov on 2/1/2018.
 */
import React, {Component} from 'react'

import './main.css'

import ProgressBar from './../../components/progressBar/progressBar'
import CategoriesConteainer from './../../components/categoriesContainer/categoriesContainer'
import TasksConteainer from './../../components/tasksContainer/tasksContainer'
import ModalContainer from './../../components/modal/modalContainer'

class MainPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return <main>
            <ProgressBar />
            <div className="main-content">
                <CategoriesConteainer />
                <TasksConteainer />
                <ModalContainer />
            </div>

        </main>;
    }
}

export default MainPage