
import io
from typing import Union
from abstra_internals.widgets.types import PlotlyFigure, PandasDataFrame
from abstra_internals.interface.sdk.forms.page import Page


def display_file(file: Union[str, io.IOBase], **kwargs):
  
    """Show a button for the user to download a file.

        Position Args: 
		file (Union[str, io.IOBase]): The file to download
		
        Keyword Args: 
		download_text (str): The text to display on the button that will download the file. Defaults to "Download here".
		end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
		full_width (bool): Whether the input should use full screen width. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    end_program = kwargs.get("end_program", False)
    return Page().display_file(file, **kwargs).run(button_text, end_program=end_program)

def display_html(html: str, **kwargs):
  
    """Simple HTML embed widget.

        Position Args: 
		html (str): The html snippet to display to the user
		
        Keyword Args: 
		end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
		full_width (bool): Whether the input should use full screen width. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    end_program = kwargs.get("end_program", False)
    return Page().display_html(html, **kwargs).run(button_text, end_program=end_program)

def display_iframe(url_or_html: str, **kwargs):
  
    """Embed content using an iframe.

        Position Args: 
		url_or_html (str): The link to the document or the own document to display to the user
		
        Keyword Args: 
		width (int): The width of the iframe. Defaults to "800".
		height (int): The height of the iframe. Defaults to "600".
		end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
		full_width (bool): Whether the input should use full screen width. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    end_program = kwargs.get("end_program", False)
    return Page().display_iframe(url_or_html, **kwargs).run(button_text, end_program=end_program)

def display_image(image: Union[str, io.IOBase], **kwargs):
  
    """Show an image to the user

        Position Args: 
		image (Union[str, io.IOBase]): The image to display to the user
		
        Keyword Args: 
		subtitle (str): The subtitle of the image. Defaults to "".
		label (str): The label to display to the user
		end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
		full_width (bool): Whether the input should use full screen width. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    end_program = kwargs.get("end_program", False)
    return Page().display_image(image, **kwargs).run(button_text, end_program=end_program)

def display_latex(text: str, **kwargs):
  
    """Display a latex formula to the user.

        Position Args: 
		text (str): The latex formula to display to the user
		
        Keyword Args: 
		end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
		full_width (bool): Whether the input should use full screen width. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    end_program = kwargs.get("end_program", False)
    return Page().display_latex(text, **kwargs).run(button_text, end_program=end_program)

def display_link(link_url: str, **kwargs):
  
    """Display a link to the user.

        Position Args: 
		link_url (str): The url of the link to display to the user
		
        Keyword Args: 
		link_text (str): The text to display on the link. Defaults to "Click here".
		same_tab (bool): Whether to open the link in the same tab or not. Defaults to False.
		end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
		full_width (bool): Whether the input should use full screen width. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    end_program = kwargs.get("end_program", False)
    return Page().display_link(link_url, **kwargs).run(button_text, end_program=end_program)

def display_markdown(text: str, **kwargs):
  
    """Show markdown formatted text to the user

        Position Args: 
		text (str): The formatted text to display to the user
		
        Keyword Args: 
		end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
		full_width (bool): Whether the input should use full screen width. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    end_program = kwargs.get("end_program", False)
    return Page().display_markdown(text, **kwargs).run(button_text, end_program=end_program)

def display_pandas(df: PandasDataFrame, **kwargs):
  
    """Display a pandas dataframe to the user

        Position Args: 
		df (PandasDataFrame): The dataframe to display to the user
		
        Keyword Args: 
		display_index (bool): Whether to show a index column. Defaults to False.
		label (str): The label to display to the user
		page_size (number): The number of rows to display per page. Defaults to 10.
		full_width (bool): Whether the input should use full screen width. Defaults to True.
		actions (list): Actions that can be triggered by table rows
		end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    end_program = kwargs.get("end_program", False)
    return Page().display_pandas(df, **kwargs).run(button_text, end_program=end_program)

def display_plotly(fig: PlotlyFigure, **kwargs):
  
    """Displays a Plotly figure.

        Position Args: 
		fig (PlotlyFigure): The figure to display to the user
		
        Keyword Args: 
		label (str): The label to display to the user
		end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
		full_width (bool): Whether the input should use full screen width. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    end_program = kwargs.get("end_program", False)
    return Page().display_plotly(fig, **kwargs).run(button_text, end_program=end_program)

def display_progress(current: float, total: float, **kwargs):
  
    """Displays a progress bar to the user.

        Position Args: 
		current (float): The progress being made. Defaults to 50.
		total (float): Total progress. Defaults to 100.
		
        Keyword Args: 
		text (str): The text displayed with this progress step. Defaults to "".
		end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
		full_width (bool): Whether the input should use full screen width. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    end_program = kwargs.get("end_program", False)
    return Page().display_progress(current, total, **kwargs).run(button_text, end_program=end_program)

def display(text: str, **kwargs):
  
    """"Text display" adds textual information into the app.

        Position Args: 
		text (str): The text to display to the user
		
        Keyword Args: 
		size (str): The size of the text: 'small', 'medium', 'large'
		end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
		full_width (bool): Whether the input should use full screen width. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    end_program = kwargs.get("end_program", False)
    return Page().display(text, **kwargs).run(button_text, end_program=end_program)
