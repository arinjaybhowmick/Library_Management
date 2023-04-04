package com.xfactor.openlibrary.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.domain.Author;
import com.xfactor.openlibrary.repositories.AuthorRepository;

@RestController
@RequestMapping("author")
public class AuthorController {

    private AuthorRepository authorRepository;

    public AuthorController(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @GetMapping("/allauthors")
    public List<Author> getAllAuthors()
    {
        return authorRepository.findAll();
    }

    @PostMapping("/saveauthor")
    public Author saveAuthor(@RequestBody Author a)
    {
        return authorRepository.save(a);
    }

    @PutMapping("/updateauthor")
    public Author updateAuthor(@RequestBody Author a)
    {
        if(authorRepository.existsById(a.getId()))
            return authorRepository.save(a);
        else
            return null;
        
    }

    @GetMapping("/authorbyid/{id}")
    public Author getAuthorById(@PathVariable Long id)
    {
        Optional<Author> optional = authorRepository.findById(id);
        if(optional.isPresent())
            return optional.get();
        else
            return null;
    }

    @GetMapping("/authorbyname/{name}")
    public List<Author> getAuthorByIsbn(@PathVariable String name)
    {
        return authorRepository.findByName(name); 
    }

    @GetMapping("/authorbynationality/{nationality}")
    public List<Author> getAuthorByNationality(@PathVariable String nationality)
    {
        return authorRepository.findByNationality(nationality); 
    }

    @GetMapping("/authorcount")
    public long getAuthorCount()
    {
        return authorRepository.count();
    }

    @DeleteMapping("/deleteauthor/{id}")
    public void deleteAuthorById(@PathVariable Long id)
    {
        if(authorRepository.existsById(id))
            authorRepository.deleteById(id);
    }
}
