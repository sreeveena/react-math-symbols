import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, CardHeader, Paper, Popper, Typography, Card, CardContent, CardActions, Box, Tab, Tabs, AppBar, IconButton } from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';

const useStyles = (theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    paddingRight: '3px',
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  typography: {
    padding: theme.spacing(2),
  },
  symbol: {
    background: "lightgrey",
    borderRadius: "0",
    margin: "1px",
    textTransform: "none",
    width: "20px",
    height: "33px",
    padding: "0px",
    minWidth: "40px",
  },
  buttonIcon3: {
    '&:focus': {
      outline: 'none',
    },
    fontSize: '10px'
  },
  tab: {
    minWidth: 40, 
    width: 50, 
    textTransform: "none",
    height: 30,
    color: 'black'
  },
  tabs: {
    '&$selected': {
      color: 'white',
    },
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#523492',
    },
  },

});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const buttons = [
  {image: '\\sqrt{x}', content: '\\sqrt{x}'},
  {image: '\\sqrt[3]{x}', content: '\\sqrt[3]{x}'},
  {image: 'x^x', content: 'x^x'},
  {image: 'x_x', content: 'x_x'},
  {image: '\\dfrac{x}{y}', content: '\\dfrac{x}{y}'},
  {image: 'x/y', content: 'x/y'},
  {image: '\\vert x \\vert', content: '\\vert x \\vert'},
  {image: '\\lbrace x \\rbrace', content: '\\lbrace x \\rbrace'},
  {image: '\\lbrack x \\rbrack', content: '\\lbrack x \\rbrack'},
  {image: '\\displaystyle\\sum_{i=1}^n', content: '\\sum'},
  {image: '\\lim', content: '\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}'},
  {image: '\\int', content: '\\int'},

  // {image: '\\sum', content: '\\sum'},
  // {image: '\\cfrac{a}{1 + \\cfrac{1}{b}}', content: '\\cfrac{a}{1 + \\cfrac{1}{b}}'},
];
const buttons1 = [
  {image: '+', content: '+'},
  {image: '-', content: '-'},
  {image: '\\pm', content: '\\pm'},
  {image: 'X', content: 'X'},
  {image: '\\div', content: '\\div'},
  {image: '*', content: '*'},
  {image: '\\cdotp', content: '\\cdotp'},
  {image: '/', content: '/'},
  {image: '\\circ', content: '\\circ'},
  {image: '\\triangle', content: '\\triangle'},
  {image: '\\triangledown', content: '\\triangledown'},
  {image: '\\infty', content: '\\infty'},
  {image: '\\pi', content: '\\pi'},
  {image: '\\text{\o}', content: '\\text{\o}'},
  {image: '\\partial', content: '\\partial'},
  {image: '"', content: '"'},
  {image: '\'', content: '\''},
  {image: '=', content: '='},
  // {image: '\\backsim', content: '\\backsim'},
  // {image: '\\backsimeq', content: '\\backsimeq'},
  {image: '\\cong', content: '\\cong'},
  // {image: '\\thickapprox', content: '\\thickapprox'},
  {image: '\\equiv', content: '\\equiv'},
  {image: '>', content: '>'},
  {image: '<', content: '<'},
  {image: '\\ge', content: '\\ge'},
  {image: '\\le', content: '\\le'},
  {image: '\\gg', content: '\\gg'},
  {image: '\\ll', content: '\\ll'},
  // {image: '\\not =', content: '\\not ='},
  // {image: '\\gneq', content: '\\gneq'},
  // {image: '\\lneq', content: '\\lneq'},
  // {image: '\\nsim', content: '\\nsim'},
  {image: '\\in', content: '\\in'},
  {image: '\\ni', content: '\\ni'},
  {image: '\\subset', content: '\\subset'},
  {image: '\\supset', content: '\\supset'},
  {image: '\\cap', content: '\\cap'},
  {image: '\\cup', content: '\\cup'},
  {image: '\\notin', content: '\\notin'},
  {image: '\\notni', content: '\\notni'},
  {image: '\\sqcup', content: '\\sqcup'},
  {image: '\\sqcap', content: '\\sqcap'},
  {image: '\\sqsubset', content: '\\sqsubset'},
  {image: '\\sqsupset', content: '\\sqsupset'},
  {image: '\\sqsubseteq', content: '\\sqsubseteq'},
  {image: '\\sqsupseteq', content: '\\sqsupseteq'},
  {image: '\\subseteq', content: '\\subseteq'},
  {image: '\\supseteq', content: '\\supseteq'},
  
];
const buttons2 = [
  {image: '\\to', content: '\\to'},
  {image: '\\gets', content: '\\gets'},
  {image: '\\leftrightarrow', content: '\\leftrightarrow'},
  {image: '\\implies', content: '\\implies'},
  {image: '\\impliedby', content: '\\impliedby'},
  {image: '\\iff', content: '\\iff'},
  {image: '\\dots', content: '\\dots'},
  {image: '\\ddots', content: '\\ddots'},
  {image: '\\vdots', content: '\\vdots'},
  {image: '\\overleftarrow{AB}', content: '\\overleftarrow{AB}'},
  // {image: '\\underleftarrow{AB}', content: '\\underleftarrow{}'},
  {image: '\\xleftarrow{abc}', content: '\\xleftarrow{abc}'},
  {image: '\\overrightarrow{AB}', content: '\\overrightarrow{AB}'},
  // {image: '\\underrightarrow{AB}', content: '\\underrightarrow{AB}'},
  // {image: '\\overleftrightarrow{AB}', content: '\\overleftrightarrow{AB}'},
  // {image: '\\underleftrightarrow{AB}', content: '\\underleftrightarrow{AB}'},
  // {image: '\overleftharpoon{ac}', content: '\\overleftharpoon{ac}'},
  // {image: '\\overrightharpoon{ac}', content: '\\overrightharpoon{ac}'},
  {image: '\\xrightarrow[under]{over}', content: '\\xrightarrow[under]{over}'},
  {image: '\\odot', content: '\\odot'},
  {image: '\\ominus', content: '\\ominus'},
  {image: '\\oplus', content: '\\oplus'},
  {image: '\\otimes', content: '\\otimes'},
  {image: '\\oslash', content: '\\oslash'},
  {image: '\\bullet', content: '\\bullet'},
  
  
];
const buttons3 = [
  {image: '\\Omega', content: '\\Omega'},
  {image: '\\alpha', content: '\\alpha'},
  {image: '\\beta', content: '\\beta'},
  {image: '\\gamma', content: '\\gamma'},
  {image: '\\delta', content: '\\delta'},
  {image: '\\eta', content: '\\eta'},
  {image: '\\theta', content: '\\theta'},
  {image: '\\mu', content: '\\mu'},
  {image: '\\epsilon', content: '\\epsilon'},
  {image: '\\zeta', content: '\\zeta'},
  {image: '\\iota', content: '\\iota'},
  {image: '\\kappa', content: '\\kappa'},
  {image: '\\lambda', content: '\\lambda'},
  {image: '\\nu', content: '\\nu'},
  {image: '\\xi', content: '\\xi'},
  // {image: '\\omicron', content: '\\omicron'},
  {image: '\\pi', content: '\\pi'},
  {image: '\\rho', content: '\\rho'},
  {image: '\\sigma', content: '\\sigma'},
  {image: '\\tau', content: '\\tau'},
  {image: '\\upsilon', content: '\\upsilon'},
  {image: '\\phi', content: '\\phi'},
  {image: '\\chi', content: '\\chi'},
  {image: '\\psi', content: '\\psi'},
  {image: '\\omega', content: '\\omega'},
  {image: '\\varepsilon', content: '\\varepsilon'},
  {image: '\\varkappa', content: '\\varkappa'},
  {image: '\\vartheta', content: '\\vartheta'},
  // {image: '\\thetasym', content: '\\thetasym'},
  {image: '\\varpi', content: '\\varpi'},
  {image: '\\varrho', content: '\\varrho'},
  {image: '\\varsigma', content: '\\varsigma'},
  {image: '\\varphi', content: '\\varphi'},
  {image: '\\digamma', content: '\\digamma'},
  
];
const buttons4 = [
  {image: '\\binom{n}{k}', content: '\\binom{n}{k}'},
  
  
];
const buttons5 = [
  {image: '\\theta', content: '\\theta'},
  {image: '\\sin', content: '\\sin'},
  {image: '\\sec', content: '\\sec'},
  {image: '\\sinh', content: '\\sinh'},
  {image: '\\tan', content: '\\tan'},
  {image: '\\tanh', content: '\\tanh'},
  {image: '\\sec', content: '\\sec'},
  {image: '\\log', content: '\\log'},
  {image: '\\coth', content: '\\coth'},
  // {image: '\\cotg', content: '\\cotg'},
  {image: '\\cot', content: '\\cot'},
  {image: '\\cosh', content: '\\cosh'},
  {image: '\cosec', content: '\\cosec'},
  {image: '\\cos', content: '\\cos'},
  {image: '\\arcsin', content: '\\arcsin'},
  {image: '\\arccos', content: '\\arccos'},
  {image: '\\arctan', content: '\\arctan'},
  // {image: '\\arctg', content: '\\arctg'},
  {image: '\arcctg', content: '\\arcctg'},
  
  
];
class Symbols extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 0,
          open: this.props.open,
          text: null,
          tex: this.props.tex,
        }
        // this.symbolEditor = React.createRef();
        if(window.MathJax && window.MathJax.text2chtml) {
            this.html = window.MathJax.tex2chtml('\\sqrt{x^2+1}', {em: 12, ex: 6, display: false});
        }
        this.symbolsRef = React.createRef();
    }
    componentDidMount() {
      console.log('componentDidMount');
        let html = "";
        // window.MathJax = {
        //   loader: {load: ["input/tex", "output/svg"]}
        // };
        // var math = require('mathjax').init({
        //   loader: {load: ['input/tex', 'output/svg']}
        // }).then((MathJax) => {
        //   const svg = MathJax.tex2svg('\\frac{1}{x^2-1}', {display: true});
        //   console.log(MathJax.startup.adaptor.outerHTML(svg));
        // }).catch((err) => console.log(err.message));
      
        console.log(window.MathJax);
        const svg = window.MathJax.tex2svg('\\frac{1}{x^2-1}', {display: true});
        console.log(svg);
        html = svg;
        // console.log(window.MathJax.tex2chtml('\\sqrt{x^2+1}'));
        if(window.MathJax && window.MathJax.text2chtml) {
            html = window.MathJax.tex2chtml('\\sqrt{x^2+1}', {em: 12, ex: 6, display: false});
        }

        
        this.setState({
            anchorEl: this.symbolsRef.current,
            html: html,
        });
        
        
    }
    componentDidUpdate(previousProps, previousState) {

      if(previousProps.open != this.props.open) {
        this.setState({
          open: this.props.open,
          tex: this.props.tex,
        });

      }

    }

    handleChange = (event, newValue) => {
      this.setState({
        value: newValue
      })
    } 

    enableEditor = (content, self) => {
      if(self.state.MQ) {
        if(content) {
          self.state.mathField.write(content);
          // this.state.mathField.focus();
          // this.state.mathField.keystroke('Backspace');
          // this.state.mathField.keystroke('Backspace');
          // this.state.mathField.keystroke('Backspace');
          // this.state.mathField.keystroke('e');
        }
        return;
      }
      let MQ = window.MathQuill.getInterface(2); // for backcompat

      let mathFieldSpan = self.symbolEditor;
      console.log(self.symbolEditor);
      console.log(mathFieldSpan);
      let mathField = MQ.MathField(mathFieldSpan, {
      spaceBehavesLikeTab: true, // configurable
      handlers: {
          edit: function() { // useful event handlers
          // latexSpan.textContent = mathField.latex(); // simple API
          console.log(mathField.latex());
          self.setState({
            text: mathField.latex()
          });
          console.log(mathField);
          console.log(mathField.latex());
          }
      }
      });
      console.log(mathField);
      self.setState({
        MQ: MQ,
        mathField: mathField,
      });
      console.log(mathField);
      if(content && mathField) {
        mathField.write(content);
      }
    }

    render() {
        const {classes} = this.props;
        // console.log(window.MathJax.tex2svg('\\sqrt{x}').innerHTML);
        return (
        <div style={{zIndex: 1930}}>
          
        <div ref={this.symbolsRef} style={{position: "fixed", bottom: 0, right: 0 }}/>
        <Popper open={this.state.open}  anchorEl={this.state.anchorEl} placement={"top"} style={{zIndex: 1930}} >
            <Paper style={{zIndex: 1930, width: "500px", height: "500px", padding: "10px", backgroundColor: "#E6E6E6"}} elevation={3}>
                <Card elevation={0} style={{backgroundColor: "#E6E6E6"}}>
                <CardContent style={{paddingTop: '0px'}}>
                <div style={{display: 'flex', paddingBottom: '5px'}}>
                <Typography>Symbols Editor</Typography>
                <div style={{flexGrow: '1'}}/>
                
                <IconButton className={classes.buttonIcon3} onClick={() => {if(this.props.onClose) {this.props.onClose(); this.setState({MQ: null, mathField: null})}}} style={{padding: '0px'}}>
                      <RemoveRoundedIcon style={{fontSize: '15px'}}/>
                </IconButton>
                <IconButton className={classes.buttonIcon3} onClick={() => {if(this.props.onClose) {this.props.onClose(); this.setState({ MQ: null, mathField: null})}}} style={{padding: '0px'}}>
                      <CloseRoundedIcon style={{fontSize: '15px', marginLeft: '3px'}}/>
                </IconButton>
                </div>
                <Typography>Enter Mathematical Notiation <a href="https://katex.org/docs/supported.html">KaTeX</a> or use symbols below.</Typography>
                <div ref={(element) => {
                  console.log(element);
                  if(element) {
                    this.symbolEditor = element;
                    console.log(this.symbolEditor.current);
                    if(this.state.tex ) {
                      this.setState({
                        tex: null
                      })
                      this.enableEditor(this.props.tex, this);
                      
                    }
                  }
                }} id="mathquill" style={{width: "450px", height: "190px", padding: '10px', borderWidth: "1px", borderColor: "gray", borderStyle: "solid", borderRadius: "5px", backgroundColor: "white", wordWrap: 'break-word'}} onClick={
                  (event) => {
                    this.enableEditor(null, this);
                  }}
                  id="popper"
                  
                  >
                    
                </div>
                
                <AppBar position="static" style={{backgroundColor: "#B2B2B2"}}>
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="white"
                  textColor="white"
                  variant="scrollable"
                  TabIndicatorProps={{ children: <span /> }}
                  classes={{indicator: classes.indicator}}
                >
                  <Tab className={classes.tab} label={<div dangerouslySetInnerHTML={{__html: window.MathJax.tex2svg('\\sqrt{x}').outerHTML}}></div>} {...a11yProps(0)} />
                  <Tab className={classes.tab} label={<div dangerouslySetInnerHTML={{__html: window.MathJax.tex2svg('\\infty').outerHTML}}></div>} {...a11yProps(1)} />
                  <Tab className={classes.tab} label={<div dangerouslySetInnerHTML={{__html: window.MathJax.tex2svg('\\rightarrow \\ddots').outerHTML}}></div>} {...a11yProps(2)} />
                  <Tab className={classes.tab} label={<div dangerouslySetInnerHTML={{__html: window.MathJax.tex2svg('\\Omega').outerHTML}}></div>} {...a11yProps(3)} />
                  <Tab className={classes.tab} label={<div dangerouslySetInnerHTML={{__html: window.MathJax.tex2svg('(n)').outerHTML}}></div>} {...a11yProps(4)} />
                  <Tab className={classes.tab} label={<div dangerouslySetInnerHTML={{__html: window.MathJax.tex2svg('\\sin \\theta').outerHTML}}></div>} {...a11yProps(5)} />
                  {/* <Tab className={classes.tab} label={<div dangerouslySetInnerHTML={{__html: window.MathJax.tex2chtml('\\sqrt{x}').outerHTML}}></div>} {...a11yProps(6)} />
                  <Tab className={classes.tab} label={<div dangerouslySetInnerHTML={{__html: window.MathJax.tex2chtml('\\sqrt{x}').outerHTML}}></div>} {...a11yProps(7)} /> */}
                </Tabs>
                </AppBar>
                <TabPanel value={this.state.value} index={0} style={{borderColor: 'gray', borderWidth: '1px', borderRadius: '3px', borderStyle: 'solid', height: '130px', maxHeight: '130px', scrollbars: 'auto', overflow: 'scroll'}}>
                {
                  buttons.map(
                    (button) => {
                      return (
                      <Button className={`${classes.symbol} ${classes.buttonIcon}`} onClick={
                        () => {
                            this.enableEditor(button.content, this);
                        }
                      }>
                        <div dangerouslySetInnerHTML={{__html: window.MathJax.tex2svg(button.image).outerHTML}}></div>
                      </Button>
                      );
                    }
                  )
                }
                </TabPanel>
                <TabPanel value={this.state.value} index={1} style={{borderColor: 'gray', borderWidth: '1px', borderRadius: '3px', borderStyle: 'solid', height: '130px', maxHeight: '130px', scrollbars: 'auto', overflow: 'scroll'}}>
                {
                  buttons1.map(
                    (button) => {
                      return (
                      <Button className={`${classes.symbol} ${classes.buttonIcon}`} onClick={
                        () => {
                          this.enableEditor(button.content, this);
                        }
                      }>
                        <div dangerouslySetInnerHTML={{__html: window.MathJax.tex2svg(button.image).outerHTML}}></div>
                      </Button>
                      );
                    }
                  )
                }
                </TabPanel>
                <TabPanel value={this.state.value} index={2} style={{borderColor: 'gray', borderWidth: '1px', borderRadius: '3px', borderStyle: 'solid', height: '130px', maxHeight: '130px', scrollbars: 'auto', overflow: 'scroll'}}>
                {
                  buttons2.map(
                    (button) => {
                      return (
                      <Button className={`${classes.symbol} ${classes.buttonIcon}`} onClick={
                        () => {
                          this.enableEditor(button.content, this);
                        }
                      }>
                        <div dangerouslySetInnerHTML={{__html: window.MathJax.tex2svg(button.image).outerHTML}}></div>
                      </Button>
                      );
                    }
                  )
                }
                </TabPanel>
                <TabPanel value={this.state.value} index={3} style={{borderColor: 'gray', borderWidth: '1px', borderRadius: '3px', borderStyle: 'solid', height: '130px', maxHeight: '130px', scrollbars: 'auto', overflow: 'scroll'}}>
                {
                  buttons3.map(
                    (button) => {
                      return (
                      <Button className={`${classes.symbol} ${classes.buttonIcon}`} onClick={
                        () => {
                          this.enableEditor(button.content, this);
                        }
                      }>
                        <div dangerouslySetInnerHTML={{__html: window.MathJax.tex2svg(button.image).outerHTML}}></div>
                      </Button>
                      );
                    }
                  )
                }
                </TabPanel>
                <TabPanel value={this.state.value} index={4} style={{borderColor: 'gray', borderWidth: '1px', borderRadius: '3px', borderStyle: 'solid', height: '130px', maxHeight: '130px', scrollbars: 'auto', overflow: 'scroll'}}>
                {
                  buttons4.map(
                    (button) => {
                      return (
                      <Button className={`${classes.symbol} ${classes.buttonIcon}`} onClick={
                        () => {
                          this.enableEditor(button.content, this);
                        }
                      }>
                        <div dangerouslySetInnerHTML={{__html: window.MathJax.tex2svg(button.image).outerHTML}}></div>
                      </Button>
                      );
                    }
                  )
                }
                </TabPanel>
                <TabPanel value={this.state.value} index={5} style={{borderColor: 'gray', borderWidth: '1px', borderRadius: '3px', borderStyle: 'solid', height: '130px', maxHeight: '130px', scrollbars: 'auto', overflow: 'scroll'}} >
                {
                  buttons5.map(
                    (button) => {
                      return (
                      <Button className={`${classes.symbol} ${classes.buttonIcon}`} onClick={
                        () => {
                          this.enableEditor(button.content, this);
                        }
                      }>
                        <div dangerouslySetInnerHTML={{__html: window.MathJax.tex2svg(button.image).outerHTML}}></div>
                      </Button>
                      );
                    }
                  )
                }
                </TabPanel>
                <TabPanel value={this.state.value} index={6} >
                six
                </TabPanel>
                <TabPanel value={this.state.value} index={7} >
                seven
                </TabPanel>
                {/* <TabPanel value={this.state.value} index={8} >
                
                </TabPanel> */}
                </CardContent>
                <CardActions>
                  <Button color="primary" onClick={() => {
                    if(this.props.onInsert) {
                      // texsvg(this.state.text).then((svg) => {
                      //   this.props.onInsert(svg);
                      // });
                      // this.props.onInsert(window.MathJax.mathml2svg(this.state.text));
                      console.log(window.MathJax.tex2svg(this.state.text).innerHTML);
                      this.props.onInsert(window.MathJax.tex2svg(this.state.text).innerHTML.replace(/\<\/svg\>.*/, "</svg>").replace(/\<svg/,"<svg mathtext=\"" + this.state.text + "\""));
                    }
                    if(this.props.onClose) {
                      this.props.onClose();
                      this.setState({
                        MQ: null,
                        mathField: null,
                      })
                    }
                  }}>
                    Insert
                  </Button>
                  <Button color="primary" onClick={() => {
                    if(this.props.onClose) {
                      this.props.onClose();
                      this.setState({
                        MQ: null,
                        mathField: null,
                      })
                    }
                  }}>
                    Cancel
                  </Button>
                </CardActions>
                </Card>
            </Paper>
          
      </Popper>

        </div>
        )
    }
}

export default withStyles(useStyles, { withTheme: true })(
    Symbols
  );