import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { alpha, InputBase, styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import './searchform.sass'

const Search = styled('form')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginLeft: 0,
    height: '80%',
    width: '100%',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

const SearchForm = ({defaultValue}) => {

    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = ({movie}) => {
        reset()
        navigate(`/search/${movie}`)
    }

    return (
        <Search
          onSubmit={handleSubmit(onSubmit)}
        >
                <SearchIconWrapper> <SearchIcon /> </SearchIconWrapper>

                <StyledInputBase
                  {...register("movie")}
                  defaultValue={defaultValue}
                  type='search'
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  />
        </Search>
    )
}

export default SearchForm