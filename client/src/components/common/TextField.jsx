import React from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextField = ({ type, name, placeholder, value, label, onChange, err, info, disabled }) => {
    return (
        <div>
            <div className="form-group">
                <input
                    type={type}
                    className={classnames("form-control form-control-lg color-blue", { 'is-invalid': err })}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    label={label}
                    onChange={onChange}
                    disabled={disabled} />
                {info && (<small className="form-text text-muted">{info}</small>)}
                {err && (<small className="invalid-feedback">{err}</small>)}
            </div>
        </div>
    )
}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    err: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string,
};
TextField.defaultProps = {
    text: 'text'
}
export default TextField;