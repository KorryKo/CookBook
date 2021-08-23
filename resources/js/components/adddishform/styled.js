import {makeStyles} from "@material-ui/core/styles";

export  const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        display: 'flex',
        margin: theme.spacing(0, 'auto'),
        padding: theme.spacing(0, 1),
    },
    formControl: {
        margin: theme.spacing(1, 0),
        width: '100%',
    },
    uploadDialog: {
        alignItems: 'center',
        margin: theme.spacing(1, 'auto'),
    },
    hidden: {
        display: 'none',
    },
    imagePreviewContainer: {
        width: 200,
        height: 150,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        border: '1px solid gray',
        background: 'lightgray',
        margin: theme.spacing(1),
        overflow: 'hidden',
    },
    imagePreview: {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    fileName: {
        color: theme.palette.text.secondary,
        fontSize: '0.8em',
    },
    iconCamera: {
        color: theme.palette.text.secondary,
        fontSize: '2em',
    },
    form_button: {
        textTransform: 'none',
        margin: theme.spacing(2, 4),
    },
    save_button: {
        margin: theme.spacing(2, 4),
        height: '64px',
    },
    back_button: {
        margin: theme.spacing(2),
    },
    h1: {
        fontWeight: 700,
        fontSize: '1.4em',
        margin: theme.spacing(3, 'auto'),
    },
    h2: {
        margin: theme.spacing(3, 'auto'),
        fontSize: '1.2em',
    },
    radio: {
        marginLeft: '16px',
    },
    modal: {
        margin: '20% auto',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        textAlign: 'center',
        lineHeight: '1.5em',
        borderRadius: 10,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(6, 2, 6),
        boxSizing: 'border-box'
    },
    dialogText: {
        margin: theme.spacing(4, 'auto'),
        textAlign: 'center',
    },
    loader: {
        display: 'block',
        margin: theme.spacing(0, 'auto', 2),
    },
    select: {
        minWidth: 100,
    },
    ingredientsList: {
        margin: theme.spacing(0, 0, 3),
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(2),
        alignItems: 'flex-end',
    },
    deleteButton: {
        padding: 0,
        marginBottom: '-2px',
        color: 'tomato',
    },
    stepsListItem: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(2),
        alignItems: 'flex-start',
    },
    fullWidth: {
        width: '100%',
    },
    stepImagePreview: {
        width: '100px',
        margin: theme.spacing(0, 1),
    },
    dots: {
        flexGrow: 0.9,
        borderBottom: '2px dotted lightgray',
        alignSelf: 'flex-end',
        lineHeight: '1.3em',
        position: 'relative',
        bottom: 4,
    },
}));