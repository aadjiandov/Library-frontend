import axios from "../custom-axios/axios";

const BookService = {
    fetchBooks: () => {
        return axios.get("/");
    },
    addBook: (book) => {
        return axios.post("/add",{
            ...book,
        });
    },
    editBook: (id, book) => {
        return axios.put(`/edit/${id}`,{
            ...book,
        });
    },
    getBook: (id) => {
        return axios.get(`/${id}`);
    },
    deleteBook: (id) => {
        return axios.delete(`/delete/${id}`);
    },
    rentBook: (id) => {
        return axios.put(`/rent/${id}`);
    },
    getCategories: () => {
        return axios.get("/categories");
    },
    getAuthors: () => {
        return axios.get("/authors");
    },
};

export default BookService;