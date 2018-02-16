/**
 * Created by Evhenii_Izotov on 2/7/2018.
 */
import React, {Component} from 'react'

import ProgressBar from './../../components/progressBar'
import CategoriesForEditingConteainer from './../../components/categoriesForEditingContainer'
import EditComponent from './../../components/editComponent'

import { updateTask } from '../../actions'
import { connect } from 'react-redux'

const mapStateToProps = (store, ownProps) => ({
        task :store.tasks.filter(task => task.id === ownProps.match.params.taskId)[0],
        categories: store.categories.categories,
    });

const mapDispatchToProps = dispatch => ({
    onTaskUpdate: task => dispatch(updateTask(task))
})

class EditPage extends Component {
    constructor(props) {
        super(props);

        console.log(this.props);
        this.onSaveChanges = this.onSaveChanges.bind(this);
        this.onCansel = this.onCansel.bind(this);
    }

    onSaveChanges(task) {
        console.log('Task', task);
        this.props.onTaskUpdate(task);
        this.props.history.push('/');
    }

    onCansel() {
        this.props.history.push('/');
    }

    render() {
        return <div>
            <main>
                <ProgressBar />
                <div className="main-content">
                    <CategoriesForEditingConteainer
                        categories={this.props.categories}
                        taskCategoryId={this.props.task.categoryId}
                    />
                    <EditComponent
                        task={this.props.task}
                        onSaveChanges={this.onSaveChanges}
                        onCansel={this.onCansel}
                    />
                </div>
            </main>
        </div>;
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(EditPage)