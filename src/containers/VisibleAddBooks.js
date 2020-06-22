import { connect } from 'react-redux';
import AddBooks from '../components/AddBooks'
import { setAction, addBook, updateBook, checkBookAuth } from '../actions'

const mapStateToProps = state => {
    return {
        books: state.books.books,
        activeUser: state.books.activeUser, 
        isLogin: state.users.isLogin
    }
}

const mapDispatchToProps = dispatch => ({
    setAction: bool => dispatch(setAction(bool)),
    addBook: book => dispatch(addBook(book)),
    updateBook: book => dispatch(updateBook(book)), 
    checkBookAuth: id => dispatch(checkBookAuth(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddBooks)