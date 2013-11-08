function block( _selector )
{
    this.selector = _selector;
    
    this.MoveTo_dir = function( n_x , n_y )
    {
        this.selector.css({"-webkit-transition-duration":"0s"});
        this.selector.css({"left":n_x+"px","top":n_y+"px"});
    }
    
    this.MoveTo_Anim = function( n_x , n_y )
    {
        this.selector.css({"-webkit-transition-duration":".2s"});
        this.selector.css({"left":n_x+"px","top":n_y+"px"});
    }
    
    this.GetPosX = function()
    {
        return parseInt(this.selector.css("left"));
    }
    
    this.GetPosY = function()
    {
        return parseInt(this.selector.css("top"));
    }
    
    this.GetImgURL = function()
    {
        return this.selector.css("background-image");
    }
    
    this.SetImgURL = function( url )
    {
        this.selector.css({"background-image":"url('"+url+"')"});
    }
    
    this.GetSelector = function()
    {
        return this.selector;
    }
    
}
