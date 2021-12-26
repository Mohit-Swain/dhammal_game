import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
/*
  <div class="flex mt-5">
          <div class="m-3">
            <button
              class="w-32 bg-white 
              tracking-wide text-gray-800 font-bold rounded 
              border-b-2 border-blue-500 hover:border-blue-600 
              hover:bg-blue-500 hover:text-white 
              shadow-md py-2 px-6 inline-flex items-center">
              <span class="mx-auto">Male</span>
            </button>
          </div>
          <div class="m-3">
            <button
              class="w-32 bg-white tracking-wide
              text-gray-800 font-bold rounded border-b-2 
              border-red-500 hover:border-red-600 hover:bg-red-500 
              hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span class="mx-auto">Female</span>

            </button>
          </div>
        </div>
*/
function UnderlineButton({ underlineColor, children }) {
  const underlineClass = `hover:bg-${underlineColor}-500 border-${underlineColor}-500 hover:border-${underlineColor}-600 focus:ring-2 focus:ring-${underlineColor}-700`;
  return (
    <div className="flex mt-5">
      <div className="m-3">
        <button
          type="button"
          className={classnames(
            underlineClass,
            'inline-flex items-center py-2 px-6 w-32 md:w-36 font-bold tracking-wide text-gray-800 hover:text-white bg-white rounded border-b-2 shadow-md'
          )}
        >
          <span className="mx-auto">{children}</span>
        </button>
      </div>
    </div>
  );
}

UnderlineButton.propTypes = {
  underlineColor: PropTypes.string,
  children: PropTypes.string.isRequired
};

UnderlineButton.defaultProps = {
  underlineColor: 'blue'
};

export default UnderlineButton;
