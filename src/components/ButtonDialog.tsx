import React,{useState} from 'react';
import './buttonDialog.css';

const ShowDialog = e =>  {
  e.preventDefault();
  alert("Apretaste el boton")
}

interface ButtonDialogProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Text to display in the dialog
   */
   DialogContent: string;
  /**
   * Optional click handler
   */
  // onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const ButtonDialog = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonDialogProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const buttonClicked = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert("Prueba");
  }

  return (
      <button
          type="button"
          className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
          style={{ backgroundColor }}
          onClick={buttonClicked}
          {...props}
        >
          {label}
      </button>
  );
};
