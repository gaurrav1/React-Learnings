function FormGroup({children, errorMessage}) {
    return (
        <div className={`form-group ${errorMessage != null ? "error" : undefined}`}>
            {children}
            {errorMessage!=null ? <div className="error-message">{errorMessage}</div> : undefined }
        </div>
    )
}

export default FormGroup